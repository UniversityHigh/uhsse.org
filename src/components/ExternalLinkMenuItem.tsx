import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Link, MenuItem } from "@chakra-ui/react";
import type { ReactNode } from "react";

type ExternalLinkMenuItemProps = {
	readonly href: string;
	readonly children: ReactNode;
};

export const ExternalLinkMenuItem = ({
	href,
	children,
}: ExternalLinkMenuItemProps) => (
	<MenuItem
		as={Link}
		display="block"
		overflow="hidden"
		whiteSpace="nowrap"
		textOverflow="ellipsis"
		href={href}
		icon={<ExternalLinkIcon />}
		isExternal
	>
		{children}
	</MenuItem>
);
