import {
	baseTheme,
	ChakraProvider as BaseChakraProvider,
	extendTheme,
	withDefaultColorScheme,
} from "@chakra-ui/react";
import { ReactNode } from "react";

const theme = extendTheme(
	{
		colors: {
			brand: baseTheme.colors.red,
		},
	},
	withDefaultColorScheme({ colorScheme: "brand" })
);

type ChakraProviderProps = {
	readonly children: ReactNode;
};

export const ChakraProvider = ({ children }: ChakraProviderProps) => (
	<BaseChakraProvider theme={theme}>{children}</BaseChakraProvider>
);
