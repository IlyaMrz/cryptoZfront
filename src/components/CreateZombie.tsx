import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Flex } from "@chakra-ui/layout";
import { useState } from "react";
import { useContractMethod_fixd } from "../hooks";

function CreateZombie() {
    const [input, setInput] = useState<string>("");
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
        }
    }
    console.log("events ", events);
    return (
        <Flex direction="row" align="center" mb="20px">
            <Input color="white" onChange={handleInput} />
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
    );
}

export default CreateZombie;
