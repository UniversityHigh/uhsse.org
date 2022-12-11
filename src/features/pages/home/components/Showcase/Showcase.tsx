import { Stack } from "@chakra-ui/react";
import type { ReactNode } from "react";

type ShowcaseProps = {
	readonly children: ReactNode;
};

export const Showcase = ({ children }: ShowcaseProps) => (
	<Stack spacing="4">{children}</Stack>
);
