import { Box, Flex, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import "./profileZombie.css";
import { Input } from "@chakra-ui/input";
import { Button } from "@chakra-ui/button";

import { useContractMethod_fixd, useZombieInfo } from "../hooks";
import { useEffect, useState } from "react";
import { useEthers } from "@usedapp/core";

interface IProps {
    id: any;
}

function ProfileZombie({ id }: IProps) {
    const { account } = useEthers();
    const [newDna, setNewDna] = useState<any>(false);
    const [isDna, setisDna] = useState<any>();
    const [newName, setNewName] = useState<any>(false);
    const [isName, setisName] = useState<any>();
    const [AddresToTransfer, setAddresToTransfer] = useState<any>(false);
    const [isAddresToTransfer, setisAddresToTransfer] = useState<any>();

    const ZombieInf = useZombieInfo(id.toString());

    const {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        state: stateFeedOnKitty,
        send: toFeedOnKitty,
        events: eventsFeedOnKitty,
    } = useContractMethod_fixd("feedOnKitty");
    function handleFeedOnKitty(id: number) {
        const idN = Math.floor(id);
        toFeedOnKitty(idN, 0);
    }

    const {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        state: stateChangeName,
        send: toChangeName,
        events: eventsChangeName,
    } = useContractMethod_fixd("changeName");
    function handleChangeName() {
        if (newName) {
            const idN = Math.floor(id);
            toChangeName(idN, newName);
        }
    }

    const {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        state: stateBuyLeveUp,
        send: toBuyLeveUp,
        events: eventsBuyLeveUp,
    } = useContractMethod_fixd("levelUp");
    function handleBuyLeveUp(id: number) {
        const idN = Math.floor(id);
        toBuyLeveUp(idN, { value: "1000000000000000" });
    }

    const {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        state: stateAttack,
        send: toAttack,
        events: attackEvents,
    } = useContractMethod_fixd("attack");
    function handleToAttack(id: number) {
        const idN = Math.floor(id);
        idN >= 1 ? toAttack(idN, idN - 1) : toAttack(idN, idN + 1);
    }

    const {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        state: stateChangeDna,
        send: toChangeDna,
        events: eventsChangeDna,
    } = useContractMethod_fixd("changeDna");
    function handleChangeDna() {
        if (newDna) {
            const intnewDna = Math.floor(newDna);
            const idN = Math.floor(id);
            toChangeDna(idN, intnewDna);
        }
    }

    const {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        state: stateToTransfer,
        send: toToTransfer,
        events: eventsToTransfer,
    } = useContractMethod_fixd("transferFrom");
    function handleAddressTransfer() {
        if (AddresToTransfer) {
            const idN = Math.floor(id);
            toToTransfer(account, AddresToTransfer, idN);
        }
    }

    return (
        <Flex
            borderRadius="7px"
            p="7px"
            m="5px"
            bg="gray.700"
            as="div"
            minWidth="80vw"
            minHeight="70vh"
            direction="column"
        >
            <Flex color="white">Profile of zombie # {id} </Flex>;
            {ZombieInf ? (
                <Flex justifyContent="center">
                    <Flex direction="column" width="70%" minWidth="60%">
                        <Flex direction="column">
                            <Text mb="10px" color="white" textAlign="center">
                                Interact with this Zombie
                            </Text>
                            <Box onClick={() => handleToAttack(id)} className="interactField">
                                <Text>Attack some zombie</Text>
                                {stateAttack.status === "None" ? (
                                    ""
                                ) : stateAttack.status === "Mining" ? (
                                    <Text>Mining...</Text>
                                ) : stateAttack.status === "Success" ? (
                                    <Text color="green.400">Success </Text>
                                ) : (
                                    stateAttack.status
                                )}
                            </Box>
                            <Box onClick={() => handleFeedOnKitty(id)} className="interactField">
                                <Text>Eat kitty</Text>
                                {stateFeedOnKitty.status === "None" ? (
                                    ""
                                ) : stateFeedOnKitty.status === "Mining" ? (
                                    <Text>Mining...</Text>
                                ) : stateFeedOnKitty.status === "Success" ? (
                                    <Text color="green.400">Success </Text>
                                ) : (
                                    stateFeedOnKitty.status
                                )}
                            </Box>
                            <Box
                                onClick={() => {
                                    handleBuyLeveUp(id);
                                }}
                                className="interactField"
                            >
                                Buy level up (cost 0.001 eth)
                                {stateBuyLeveUp.status === "None" ? (
                                    ""
                                ) : stateBuyLeveUp.status === "Mining" ? (
                                    <Text>Mining...</Text>
                                ) : stateBuyLeveUp.status === "Success" ? (
                                    <Text color="green.400">Success </Text>
                                ) : (
                                    stateBuyLeveUp.status
                                )}
                            </Box>
                            <Flex cursor="default" direction="column" className="interactField">
                                <Text cursor="pointer" onClick={() => setisName(!isName)}>
                                    Change Name {"(lvl must be > 2)"}
                                </Text>
                                {stateChangeName.status === "None" ? (
                                    ""
                                ) : stateChangeName.status === "Mining" ? (
                                    <Text>Mining...</Text>
                                ) : stateChangeName.status === "Success" ? (
                                    <Text color="green.400">Success </Text>
                                ) : (
                                    stateChangeName.status
                                )}

                                {isName ? (
                                    <Flex mt="15px">
                                        <Input
                                            placeholder="choose new Name"
                                            onChange={(e) => {
                                                setNewName(e.target.value);
                                            }}
                                            type="string"
                                        />
                                        <Button
                                            onClick={() => handleChangeName()}
                                            width="fit-content"
                                            colorScheme="teal"
                                            mx="5px"
                                        >
                                            Confirm
                                        </Button>
                                    </Flex>
                                ) : (
                                    ""
                                )}
                            </Flex>

                            <Flex cursor="default" direction="column" className="interactField">
                                <Text cursor="pointer" onClick={() => setisDna(!isDna)}>
                                    Change DNA {"(lvl must be > 20)"}
                                </Text>
                                {stateChangeDna.status === "None" ? (
                                    ""
                                ) : stateChangeDna.status === "Mining" ? (
                                    <Text>Mining...</Text>
                                ) : stateChangeDna.status === "Success" ? (
                                    <Text color="green.400">Success </Text>
                                ) : (
                                    stateChangeDna.status
                                )}
                                {isDna ? (
                                    <Flex mt="15px">
                                        <Input
                                            placeholder="enter new DNA"
                                            onChange={(e) => {
                                                setNewDna(e.target.value);
                                            }}
                                            type="number"
                                        />
                                        <Button
                                            onClick={() => handleChangeDna()}
                                            width="fit-content"
                                            colorScheme="teal"
                                            mx="5px"
                                        >
                                            Confirm
                                        </Button>
                                    </Flex>
                                ) : (
                                    ""
                                )}
                            </Flex>
                            <Flex cursor="default" direction="column" className="interactField">
                                <Text
                                    cursor="pointer"
                                    onClick={() => setisAddresToTransfer(!isAddresToTransfer)}
                                >
                                    Transfer
                                </Text>
                                {isAddresToTransfer ? (
                                    <Flex mt="15px">
                                        <Input
                                            placeholder="enter an adrress where to send this zombie"
                                            onChange={(e) => {
                                                setAddresToTransfer(e.target.value);
                                            }}
                                        />
                                        <Button
                                            onClick={() => handleAddressTransfer()}
                                            width="fit-content"
                                            colorScheme="teal"
                                            mx="5px"
                                        >
                                            Confirm
                                        </Button>
                                    </Flex>
                                ) : (
                                    ""
                                )}
                            </Flex>
                        </Flex>
                    </Flex>

                    <Box
                        height="100%"
                        border="2px solid #5E78A8"
                        m="5px"
                        bg="gray.800"
                        as="div"
                        style={{
                            borderRadius: "16px",
                            padding: "8px",
                        }}
                    >
                        <Flex justify="center">
                            {ZombieInf[1].toNumber() % 100 === 99 ? (
                                <Image
                                    src={`https://robohash.org/${id}.png?set=set4&size=100x100`}
                                />
                            ) : (
                                <Image
                                    src={`https://robohash.org/${id}.png?set=set2&size=100x100`}
                                />
                            )}
                        </Flex>
                        <Text color="white" fontSize="1xl" align="center">
                            {ZombieInf[0]}
                        </Text>
                        <Text color="white" fontSize="1xl" align="center">
                            DNA - {ZombieInf[1].toNumber()}
                        </Text>
                        <Text color="white" fontSize="1xl" align="center">
                            {ZombieInf[2]} - level
                        </Text>
                        <Text color="white" fontSize="1xl" align="center">
                            {ZombieInf[4]} - wins
                        </Text>
                        <Text color="white" fontSize="1xl" align="center">
                            {ZombieInf[5]} - loss
                        </Text>
                        <Text color="white" fontSize="1xl" align="center">
                            iD: {id}
                        </Text>
                    </Box>
                </Flex>
            ) : (
                <Text width="100%" color="white" textAlign="center">
                    Loading.... or not found
                </Text>
            )}
            <Box mt="10px" color="red.400">
                * Warning - Be sure a zombie has required level for certain action
            </Box>
        </Flex>
    );
}

export default ProfileZombie;
