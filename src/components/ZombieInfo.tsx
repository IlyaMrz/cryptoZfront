import { Flex, Text, Button, Box, Image } from "@chakra-ui/react";
import { useState } from "react";
import { useZombieInfo } from "../hooks";

interface IProps {
    id: string;
}

export default function ZombieInfo({ id }: IProps) {
    const ZombieInfo = useZombieInfo(id);
    const [isHover, setIsHover] = useState<boolean>(false);
    return (
        <Flex
            onMouseEnter={() => setIsHover(!isHover)}
            onMouseLeave={() => setIsHover(!isHover)}
            direction="column"
            align="center"
            mt="4"
        >
            {ZombieInfo ? (
                <Box
                    alignItems="center"
                    m="5px"
                    bg="gray.700"
                    as="div"
                    style={{
                        borderRadius: "16px",
                        padding: "8px",
                    }}
                >
                    <Flex justify="center">
                        <Image src={`https://robohash.org/${id}.png?set=set2&size=100x100`} />
                    </Flex>
                    <Text color="white" fontSize="1xl" align="center">
                        {ZombieInfo[0]}
                    </Text>
                    <Text color="white" fontSize="1xl" align="center">
                        DNA - {ZombieInfo[1].toNumber()}
                    </Text>
                    <Text color="white" fontSize="1xl" align="center">
                        {ZombieInfo[2]} - level
                    </Text>
                    <Text color="white" fontSize="1xl" align="center">
                        {ZombieInfo[4]} - wins
                    </Text>
                    <Text color="white" fontSize="1xl" align="center">
                        {ZombieInfo[5]} - loss
                    </Text>
                    {isHover ? (
                        <Flex mt="5px" direction="row" justifyContent="center">
                            <Button
                                width="100%"
                                colorScheme="teal"
                                size="lg"
                                justifyContent="center"
                            >
                                choose
                            </Button>
                        </Flex>
                    ) : null}
                </Box>
            ) : (
                <Text color="white" fontSize="1xl">
                    none or loading...
                </Text>
            )}
        </Flex>
    );
}
