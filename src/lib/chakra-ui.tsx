import { theme } from "@/theme";
import { ChakraProvider as BaseChakraProvider } from "@chakra-ui/react";
import type { ReactNode } from "react";

type ChakraProviderProps = {
	readonly children: ReactNode;
};

export const ChakraProvider = ({ children }: ChakraProviderProps) => (
	<BaseChakraProvider theme={theme}>{children}</BaseChakraProvider>
);
