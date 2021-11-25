import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Flex, Text } from "@chakra-ui/layout";
import { useState } from "react";
import { useContractMethod_fixd } from "../hooks";

function CreateZombie() {
    const [input, setInput] = useState<string>("");
    const [created, setCreated] = useState<boolean>(false);
    const {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        state: setZombieName,
        send: createZombie,
        events,
    } = useContractMethod_fixd("createRandomZombie");
    function handleInput(event: any) {
        event.stopPropagation();
        setInput(event.target.value);
    }
    function handleCreateZombie() {
        if (input) {
            createZombie(input);
            setCreated(true);
        }
    }
    console.log("events ", events);
    return (
        <Flex direction="column" mt="70">
            {!created ? (
                <Flex direction="row" align="center" mb="20px">
                    <Input
                        placeholder="enter name of New Zombie"
                        color="white"
                        onChange={handleInput}
                    />
                    <Flex>
                        <Button
                            onClick={handleCreateZombie}
                            width="fit-content"
                            px="5px"
                            m="5px"
                            colorScheme="teal"
                        >
                            create Zombie
                        </Button>
                    </Flex>
                </Flex>
            ) : (
                <Text color="white" alignContent="center" textAlign="center">
                    Confirm a transaction with your wallet <br></br>
                    ... <br></br>
                    Please be patien. Creation could take a while. <br></br>
                    Go in yout list of zombies.<br></br>
                    Wait and a new zombie should Appear there.
                </Text>
            )}
        </Flex>
    );
}

export default CreateZombie;
