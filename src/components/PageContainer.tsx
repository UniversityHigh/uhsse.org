import { Container } from "@chakra-ui/react";
import type { ReactNode } from "react";

type PageContainerProps = {
	readonly children: ReactNode;
};

export const PageContainer = ({ children }: PageContainerProps) => (
	<Container maxWidth="container.xl" paddingY="12">
		{children}
	</Container>
);
