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
			height="16"
			paddingX="6"
			paddingY="3"
			justifyContent="space-between"
			alignItems="center"
			boxShadow="sm"
		>
			<Heading as="h1" size="lg" color="brand.600">
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
						icon={<HamburgerIcon />}
						variant="outline"
						size="sm"
						disabled={!hasExternalLinks}
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
