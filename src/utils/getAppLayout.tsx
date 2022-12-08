import globals from "@/assets/netlify-cms-globals.json";
import { Navbar } from "@/components/Navbar";
import { ChakraProvider } from "@/lib/chakra-ui";
import type { NextPageGetLayout } from "@/lib/nextjs";

export const getAppLayout: NextPageGetLayout = (page) => (
	<ChakraProvider>
		<Navbar title={globals.title} />

		{page}
	</ChakraProvider>
);
