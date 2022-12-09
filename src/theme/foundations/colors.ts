import type { Colors } from "@chakra-ui/react";
import { baseTheme } from "@chakra-ui/react";

// Next.js fails to build if `baseTheme` is not referenced before it's used in
// the export.
void baseTheme;

export const colors = {
	brand: baseTheme.colors.red,
} satisfies Colors;
