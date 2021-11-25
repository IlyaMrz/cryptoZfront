import { Box } from "@chakra-ui/layout";

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
        <>
            <Box
                borderRadius="7px"
                p="7px"
                m="5px"
                bg="gray.700"
                as="div"
                onClick={() => handleHome()}
                color="white"
            >
                List of Zombies
            </Box>
            <Box
                borderRadius="7px"
                p="7px"
                m="5px"
                bg="gray.700"
                as="div"
                onClick={() => handleCreate()}
                color="white"
            >
                create zombie
            </Box>
        </>
    );
}

export default NavBar;
