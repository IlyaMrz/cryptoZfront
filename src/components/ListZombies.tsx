import { Flex, Text } from "@chakra-ui/react";

import { useListZombiesByOwner } from "../hooks";
import ZombieInfo from "./ZombieInfo";

interface IProps {
    handleChoose: (id: any) => void;
}

export default function ListZombies({ handleChoose }: IProps) {
    const idsArray = useListZombiesByOwner();

    return (
        <Flex direction="column" align="center">
            <Text color="white">You have {idsArray ? idsArray[0].length : 0} zombie(s) Army</Text>
            <Flex maxWidth="1100px" flexDirection="row" flexFlow="wrap" justify="center">
                {idsArray ? (
                    idsArray[0].map((idd: any) => {
                        return <ZombieInfo id={idd} key={idd} handleChoose={handleChoose} />;
                    })
                ) : (
                    <Text color="white">none or loading</Text>
                )}
            </Flex>
        </Flex>
    );
}
