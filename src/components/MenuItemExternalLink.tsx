import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Link, MenuItem } from "@chakra-ui/react";
import { ReactNode } from "react";

type MenuItemExternalLink = {
	readonly href: string;
	readonly children: ReactNode;
};

export const MenuItemExternalLink = ({
	href,
	children,
}: MenuItemExternalLink) => (
	<MenuItem as={Link} icon={<ExternalLinkIcon />} isExternal href={href}>
		{children}
	</MenuItem>
);
