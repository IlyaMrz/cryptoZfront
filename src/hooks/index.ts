import { ethers, Signer } from "ethers";
import { useContractCall, useContractFunction, useEthers, TransactionOptions } from "@usedapp/core";
// import { Contract } from "@ethersproject/contracts";
import simpleContractAbi from "../abi/SimpleContract.json";
import { simpleContractAddress } from "../contracts";
import { useCallback, useState } from "react";
import { usePromiseTransaction } from "@usedapp/core/dist/esm/src/hooks/usePromiseTransaction";
import { Contract } from "@usedapp/core/node_modules/ethers";
import { Web3Provider } from "@usedapp/core/node_modules/@ethersproject/providers";

const simpleContractInterface = new ethers.utils.Interface(simpleContractAbi);

export function useZombieInfo(id: string = "0") {
    const ZombieInfo: any =
        useContractCall({
            abi: simpleContractInterface,
            address: simpleContractAddress,
            method: "zombies",
            args: [id],
        }) ?? "";
    return ZombieInfo;
}

export function useListZombiesByOwner() {
    const { account } = useEthers();
    const ZombieIds: any =
        useContractCall({
            abi: simpleContractInterface,
            address: simpleContractAddress,
            method: "getZombiesByOwner",
            args: [account],
        }) ?? "";
    if (ZombieIds) {
        const idsArray = Array.from(ZombieIds);
        const idsArray2 = idsArray.map((e: any) => {
            return e.map((i: any) => i.toNumber().toString());
        });
        return idsArray2 ? idsArray2 : "";
    }
    // return ZombieIds;
}

const contract = new Contract(simpleContractAddress, simpleContractInterface);

// export function useCreateZombie(name:string) {
//     const { state, send } = useContractFunction(contract, "createRandomZombie", {name});
//     return { state, send };
//   }

// export function usecreateRandomZombie() {
//     const { state, send } = useContractFunction(contract, "setCount", {});
//     return { state, send };
//   }

export function useContractMethod(methodName: string) {
    const { state, send } = useContractFunction(contract, methodName, {});
    return { state, send };
}

export function connectContractToSigner(
    contract: Contract,
    options?: TransactionOptions,
    library?: Web3Provider
) {
    if (contract.signer) {
        return contract;
    }

    if (options?.signer) {
        //@ts-ignore
        return contract.connect(options.signer as Signer);
    }

    if (library?.getSigner()) {
        return contract.connect(library.getSigner());
    }

    throw new TypeError("No signer available in contract, options or library");
}

export const useContractFunction__fix = (
    contract: Contract,
    functionName: string,
    options?: TransactionOptions
) => {
    const { library, chainId } = useEthers();
    const [events, setEvents] = useState<Record<string, any> | undefined>(undefined);

    const { promiseTransaction, state } = usePromiseTransaction(chainId, options);

    const send = useCallback(
        async (...args: any[]) => {
            const contractWithSigner = connectContractToSigner(contract, options, library);
            const sendPromise = contractWithSigner[functionName](...args).then(
                (result: any): Promise<any> => {
                    // Need to add chainId here to prevent "TypeError: Unsupported Chain" error message
                    result.chainId = chainId;
                    return result;
                }
            );

            const receipt: any = await promiseTransaction(sendPromise);

            if (receipt) {
                if (receipt.logs && receipt.logs.length > 0) {
                    setEvents(receipt.logs.map((log: any) => contract.interface.parseLog(log)));
                } else {
                    setEvents([]);
                }
            }
        },
        [contract, functionName, chainId, promiseTransaction, library, options]
    );

    return { send, state, events };
};

export function useContractMethod_fixd(methodName: string) {
    const { state, send, events } = useContractFunction__fix(contract, methodName, {});
    return { state, send, events };
}
