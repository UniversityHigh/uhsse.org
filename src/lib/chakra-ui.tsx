import { ChakraProvider as BaseChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";

type ChakraProviderProps = {
	readonly children: ReactNode;
};

export const ChakraProvider = ({ children }: ChakraProviderProps) => (
	<BaseChakraProvider>{children}</BaseChakraProvider>
);
