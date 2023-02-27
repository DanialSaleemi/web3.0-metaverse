import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";


export default function ChakraWrapper({children}: {children: React.ReactNode}) {
    return <ChakraProvider>
        {children}
    </ChakraProvider>

}