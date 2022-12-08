import globals from "@/assets/netlify-cms-globals.json";
import { HamburgerIcon } from "@chakra-ui/icons";
import {
	Flex,
	Heading,
	IconButton,
	Menu,
	MenuButton,
	MenuList,
} from "@chakra-ui/react";
import { ExternalLinkMenuItem } from "./ExternalLinkMenuItem";
import { InternalLink } from "./InternalLink";

type NavbarProps = {
	readonly title: string;
};

export const Navbar = ({ title }: NavbarProps) => {
	const hasExternalLinks = globals.externalLinks.length > 0;

	return (
		<Flex
			as="nav"
			position="sticky"
			zIndex="1"
			top="0"
			height="16"
			paddingX="6"
			paddingY="3"
			justifyContent="space-between"
			alignItems="center"
		>
			<Heading as="h1" size="md">
				{title}
			</Heading>

			<Flex columnGap="8">
				<InternalLink href="/">Home</InternalLink>
			</Flex>

			<Flex>
				<Menu>
					<MenuButton
						as={IconButton}
						aria-label="External Links"
						icon={<HamburgerIcon />}
						variant="outline"
						size="sm"
						disabled={!hasExternalLinks}
					/>

					<MenuList maxWidth="xs">
						{globals.externalLinks.map(({ name, url }) => (
							<ExternalLinkMenuItem key={name} href={url}>
								{name}
							</ExternalLinkMenuItem>
						))}
					</MenuList>
				</Menu>
			</Flex>
		</Flex>
	);
};
