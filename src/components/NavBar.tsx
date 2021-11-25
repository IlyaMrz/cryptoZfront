import { Box, Flex } from "@chakra-ui/layout";
import { Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

interface IProps {
    handleChoose: (id: any) => void;
}

function NavBar({ handleChoose }: IProps) {
    function handleHome() {
        handleChoose(false);
    }
    function handleCreate() {
        handleChoose(-1);
    }
    return (
        <Flex width="100%" justifyContent="space-around">
            <Flex>
                <Box
                    cursor="pointer"
                    borderRadius="7px"
                    p="7px"
                    m="5px"
                    bg="gray.700"
                    as="div"
                    onClick={() => handleHome()}
                    color="white"
                >
                    My Zombies List
                </Box>
                <Box
                    cursor="pointer"
                    borderRadius="7px"
                    p="7px"
                    m="5px"
                    bg="gray.700"
                    as="div"
                    onClick={() => handleCreate()}
                    color="white"
                >
                    Create Zombie
                </Box>
            </Flex>
            <Link
                cursor="pointer"
                borderRadius="7px"
                p="7px"
                m="5px"
                bg="gray.700"
                color="white"
                href="https://ropsten.etherscan.io/address/0x185Eb02Bdd555A3920b40496FBEd13098E269BA0"
                isExternal
            >
                Open Contract on Etherscan <ExternalLinkIcon mb="2px" mx="2px" />
            </Link>
        </Flex>
    );
}

export default NavBar;
