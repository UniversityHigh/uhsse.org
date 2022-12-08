import type { LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { Link as ChakraLink } from "@chakra-ui/react";
import type { LinkProps as NextLinkProps } from "next/link";
import NextLink from "next/link";

type InternalLinkProps = Omit<ChakraLinkProps, "as"> &
	Omit<NextLinkProps, "as">;

export const InternalLink = (props: InternalLinkProps) => (
	<ChakraLink as={NextLink} {...props} />
);
