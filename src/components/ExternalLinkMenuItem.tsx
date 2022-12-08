import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Link, MenuItem } from "@chakra-ui/react";
import { ReactNode } from "react";

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
		icon={<ExternalLinkIcon />}
		isExternal
		href={href}
		display="block"
		overflow="hidden"
		whiteSpace="nowrap"
		textOverflow="ellipsis"
	>
		{children}
	</MenuItem>
);
