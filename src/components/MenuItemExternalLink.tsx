import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Link, MenuItem } from "@chakra-ui/react";
import { ReactNode } from "react";

type MenuItemExternalLinkProps = {
	readonly href: string;
	readonly children: ReactNode;
};

export const MenuItemExternalLink = ({
	href,
	children,
}: MenuItemExternalLinkProps) => (
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
