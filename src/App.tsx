import { ChakraProvider, useDisclosure } from "@chakra-ui/react";
import theme from "./theme";
import Layout from "./components/Layout";
import ConnectButton from "./components/ConnectButton";
import AccountModal from "./components/AccountModal";
import "@fontsource/inter";
import ListZombies from "./components/ListZombies";
import LayoutInnerApp from "./components/LayoutInnerApp";
import NavBar from "./components/NavBar";
import { Flex } from "@chakra-ui/layout";
import CreateZombie from "./components/CreateZombie";
import { useEthers } from "@usedapp/core";
import { Text } from "@chakra-ui/react";

function App() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { account } = useEthers();
    return (
        <ChakraProvider theme={theme}>
            <Layout>
                <ConnectButton handleOpenModal={onOpen} />
                <AccountModal isOpen={isOpen} onClose={onClose} />
                {account ? (
                    <>
                        <Flex width="100%" justify="center">
                            <NavBar />
                        </Flex>

                        <LayoutInnerApp>
                            <CreateZombie />
                            <ListZombies />
                        </LayoutInnerApp>
                    </>
                ) : (
                    <Text width="100%" color="white" textAlign="center">
                        Please Login to proceed
                    </Text>
                )}
            </Layout>
        </ChakraProvider>
    );
}

export default App;
