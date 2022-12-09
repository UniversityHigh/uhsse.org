import { Hero } from "@/components/Hero";
import { ChakraProvider } from "@/lib/chakra-ui";
import type { NextPageWithLayout } from "@/lib/nextjs";
import { Head } from "@/lib/nextjs";
import { getAppLayout } from "@/utils/getAppLayout";
import netlifyCmsContent from "../assets/netlify-cms-content.json";

export const HomePage: NextPageWithLayout = () => (
	<ChakraProvider>
		<Head
			page="Home"
			description="Unviersity High School of Science and Engineering"
		/>

		<Hero
			image={netlifyCmsContent.backgroundImage}
			heading={netlifyCmsContent.heading}
			subheading={netlifyCmsContent.subheading}
		/>
	</ChakraProvider>
);

HomePage.getLayout = getAppLayout;
