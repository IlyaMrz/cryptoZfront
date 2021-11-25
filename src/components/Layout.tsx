import { ReactNode } from "react";
import { Flex } from "@chakra-ui/react";

type Props = {
    children?: ReactNode;
};

export default function Layout({ children }: Props) {
    return (
        <Flex
            flexDirection="column"
            alignItems="end"
            justifyContent="start"
            h="100%"
            bg="gray.800"
            minHeight="100vh"
            p="20px"
        >
            {children}
        </Flex>
    );
}
