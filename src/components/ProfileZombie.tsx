import { Box, Flex } from "@chakra-ui/layout";

function ProfileZombie() {
    return (
        <Box
            borderRadius="7px"
            p="7px"
            m="5px"
            bg="gray.700"
            as="div"
            minWidth="90vw"
            minHeight="70vh"
        >
            <Flex color="white">Profile of zombie</Flex>;
        </Box>
    );
}

export default ProfileZombie;
