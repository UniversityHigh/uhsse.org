import { HamburgerIcon, SmallCloseIcon } from "@chakra-ui/icons";
import {
	Flex,
	Heading,
	IconButton,
	Menu,
	MenuButton,
	MenuGroup,
	MenuList,
} from "@chakra-ui/react";
import { LinkMenuItem } from "./LinkMenuItem";

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

			<Menu>
				{({ isOpen }) => (
					<>
						<MenuButton
							as={IconButton}
							aria-label="External Links"
							disabled={!hasExternalLinks}
							icon={isOpen ? <SmallCloseIcon /> : <HamburgerIcon />}
							size="sm"
							variant="solid"
						/>

						<MenuList maxWidth="xs">
							<MenuGroup title="Pages">
								{internalLinks.map(({ name, url }) => (
									<LinkMenuItem key={name} href={url}>
										{name}
									</LinkMenuItem>
								))}
							</MenuGroup>

							{hasExternalLinks && (
								<MenuGroup title="External Links">
									{externalLinks.map(({ name, url }) => (
										<LinkMenuItem key={name} href={url} isExternal>
											{name}
										</LinkMenuItem>
									))}
								</MenuGroup>
							)}
						</MenuList>
					</>
				)}
			</Menu>
		</Flex>
	);
};
