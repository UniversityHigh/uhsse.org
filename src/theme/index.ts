import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
import { components } from "./components";
import { colors } from "./foundations/colors";

const overrides = {
	colors,
	components,
};

export const theme = extendTheme(
	overrides,
	withDefaultColorScheme({ colorScheme: "brand" })
);
