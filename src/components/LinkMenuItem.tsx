import { ArrowForwardIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { Link, MenuItem } from "@chakra-ui/react";
import type { ReactNode } from "react";
import { InternalLink } from "./InternalLink";

type LinkMenuItemProps = {
	readonly href: string;
	readonly isExternal?: boolean;
	readonly children: ReactNode;
};

export const LinkMenuItem = ({
	href,
	isExternal = false,
	children,
}: LinkMenuItemProps) => (
	<MenuItem
		as={isExternal ? Link : InternalLink}
		display="block"
		overflow="hidden"
		whiteSpace="nowrap"
		textOverflow="ellipsis"
		href={href}
		icon={isExternal ? <ExternalLinkIcon /> : <ArrowForwardIcon />}
		isExternal={isExternal}
	>
		{children}
	</MenuItem>
);
