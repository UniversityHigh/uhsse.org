import type { ThemeOverride } from "@chakra-ui/react";
import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
import { components } from "./components";
import { colors } from "./foundations/colors";

const overrides = {
	colors,
	components,
} satisfies ThemeOverride;

export const theme = extendTheme(
	overrides,
	withDefaultColorScheme({ colorScheme: "brand" })
);
