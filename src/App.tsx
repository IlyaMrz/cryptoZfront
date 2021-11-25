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
import { useState } from "react";
import ProfileZombie from "./components/ProfileZombie";
import SourceCodeLinks from "./components/SourceCodeLinks";

type CallbackFunction = (id: any) => void;

function App() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { account } = useEthers();
    const [choosenId, setChoosenId] = useState<any>(false);

    const handleChoose: CallbackFunction = (id) => {
        setChoosenId(id);
    };
    return (
        <ChakraProvider theme={theme}>
            <Layout>
                <ConnectButton handleOpenModal={onOpen} />
                <AccountModal isOpen={isOpen} onClose={onClose} />
                {account ? (
                    <>
                        <Flex width="100%" justify="start">
                            <NavBar handleChoose={handleChoose} />
                        </Flex>

                        <LayoutInnerApp>
                            {!choosenId ? (
                                <ListZombies handleChoose={handleChoose} />
                            ) : choosenId === -1 ? (
                                <CreateZombie />
                            ) : choosenId === -2 ? (
                                <SourceCodeLinks />
                            ) : choosenId >= 0 ? (
                                <ProfileZombie id={choosenId} />
                            ) : (
                                <div>hmmmm something wrong</div>
                            )}
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
