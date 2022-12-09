import netlifyCmsGlobals from "@/assets/netlify-cms-globals.json";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import type { NavbarLinks } from "@/components/Navbar";
import { Navbar } from "@/components/Navbar";
import { ChakraProvider } from "@/lib/chakra-ui";
import type { NextPageGetLayout } from "@/lib/nextjs";
import { Box } from "@chakra-ui/react";

const internalLinks: NavbarLinks = [
	{
		name: "Home",
		url: "/",
	},
];

export const getAppLayout: NextPageGetLayout = (page) => (
	<ChakraProvider>
		<Box minHeight="100vh">
			<Navbar
				title={netlifyCmsGlobals.schoolName}
				internalLinks={internalLinks}
				externalLinks={netlifyCmsGlobals.externalLinks}
			/>

			<AnnouncementBar>{netlifyCmsGlobals.announcement}</AnnouncementBar>

			{page}
		</Box>
	</ChakraProvider>
);
