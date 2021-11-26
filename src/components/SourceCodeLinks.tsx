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
                            textDecoration="underline"
                            color="white"
                            href="https://github.com/IlyaMrz/cryptoZfront"
                            isExternal
                            className="interactField"
                        >
                            This React App Source Code <ExternalLinkIcon mb="2px" mx="2px" />
                        </Link>
                        <Link
                            textDecoration="underline"
                            color="white"
                            href="https://github.com/IlyaMrz/cryptoZ"
                            isExternal
                            className="interactField"
                        >
                            Ethereum Contract Source Code <ExternalLinkIcon mb="2px" mx="2px" />
                        </Link>
                        <Link
                            textDecoration="underline"
                            color="white"
                            href="https://cryptozombies.io/ru/course"
                            isExternal
                            className="interactField"
                        >
                            App based on this Crypto Zombies course{" "}
                            <ExternalLinkIcon mb="2px" mx="2px" />
                        </Link>
                        <Flex
                            cursor="default"
                            direction="column"
                            className="interactField"
                            color="white"
                        >
                            <Text>
                                To look up on full functional of this Smart Contract you could use
                                this ABI and Address
                            </Text>
                            <Link
                                textDecoration="underline"
                                isExternal
                                href="https://raw.githubusercontent.com/IlyaMrz/cryptoZ/main/cryptoZombiesABI.json"
                            >
                                ABI file <ExternalLinkIcon mb="2px" mx="2px" />
                            </Link>
                            <Text>Address: 0x185Eb02Bdd555A3920b40496FBEd13098E269BA0</Text>
                            <Text>
                                A handy site for this purpose
                                <Link
                                    textDecoration="underline"
                                    isExternal
                                    href="https://justsmartcontracts.dev/"
                                >
                                    {"  "}
                                    justsmartcontracts.dev
                                    <ExternalLinkIcon mb="2px" mx="2px" />
                                </Link>
                            </Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
}

export default SourceCodeLinks;
