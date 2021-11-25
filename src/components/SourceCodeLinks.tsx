import "./profileZombie.css";
import { Flex, Text } from "@chakra-ui/layout";
import { Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

function SourceCodeLinks() {
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
            <Flex justifyContent="center">
                <Flex direction="column" width="70%" minWidth="60%">
                    <Flex direction="column">
                        <Text mb="10px" color="white" textAlign="center">
                            Links:
                        </Text>

                        <Link
                            color="white"
                            href="https://github.com/IlyaMrz/cryptoZfront"
                            isExternal
                            className="interactField"
                        >
                            This React App Source Code <ExternalLinkIcon mb="2px" mx="2px" />
                        </Link>
                        <Link
                            color="white"
                            href="https://github.com/IlyaMrz/cryptoZ"
                            isExternal
                            className="interactField"
                        >
                            Ethereum Contract Source Code <ExternalLinkIcon mb="2px" mx="2px" />
                        </Link>
                        <Link
                            color="white"
                            href="https://cryptozombies.io/ru/course"
                            isExternal
                            className="interactField"
                        >
                            App based on this Crypto Zombies course{" "}
                            <ExternalLinkIcon mb="2px" mx="2px" />
                        </Link>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
}

export default SourceCodeLinks;
