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

export type NavbarLink = {
	readonly name: string;
	readonly url: string;
};
export type NavbarLinks = readonly NavbarLink[];

type NavbarProps = {
	readonly title: string;
	readonly internalLinks: NavbarLinks;
	readonly externalLinks?: NavbarLinks;
};

export const Navbar = ({
	title,
	internalLinks,
	externalLinks,
}: NavbarProps) => {
	const hasExternalLinks = !!externalLinks && externalLinks.length > 0;

	return (
		<Flex
			as="nav"
			position="sticky"
			zIndex="1"
			top="0"
			alignItems="center"
			justifyContent="space-between"
			height="16"
			boxShadow="sm"
			backgroundColor="white"
			paddingX="6"
			paddingY="3"
		>
			<Heading as="h1" color="brand.600" size="lg">
				{title}
			</Heading>

			<Flex columnGap="8">
				{internalLinks.map(({ name, url }) => (
					<InternalLink key={name} href={url}>
						{name}
					</InternalLink>
				))}
			</Flex>

			<Flex>
				<Menu>
					<MenuButton
						as={IconButton}
						aria-label="External Links"
						disabled={!hasExternalLinks}
						icon={<HamburgerIcon />}
						size="sm"
						variant="outline"
					/>

					{hasExternalLinks && (
						<MenuList maxWidth="xs">
							{externalLinks.map(({ name, url }) => (
								<ExternalLinkMenuItem key={name} href={url}>
									{name}
								</ExternalLinkMenuItem>
							))}
						</MenuList>
					)}
				</Menu>
			</Flex>
		</Flex>
	);
};
