import netlifyCmsGlobals from "@/assets/netlify-cms-globals.json";
import type { NavbarLinks } from "@/components/Navbar";
import { Navbar } from "@/components/Navbar";
import { ChakraProvider } from "@/lib/chakra-ui";
import type { NextPageGetLayout } from "@/lib/nextjs";

const internalLinks: NavbarLinks = [
	{
		name: "Home",
		url: "/",
	},
];

export const getAppLayout: NextPageGetLayout = (page) => (
	<ChakraProvider>
		<Navbar
			title={netlifyCmsGlobals.title}
			internalLinks={internalLinks}
			externalLinks={netlifyCmsGlobals.externalLinks}
		/>

		{page}
	</ChakraProvider>
);
