import { ReactNode } from "react";
import { Flex } from "@chakra-ui/react";

type Props = {
    children?: ReactNode;
};

export default function LayoutInnerApp({ children }: Props) {
    return (
        <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            h="100%"
            bg="gray.800"
            width="100vw"
        >
            {children}
        </Flex>
    );
}
