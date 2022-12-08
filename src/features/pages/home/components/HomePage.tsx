import { Hero } from "@/components/Hero";
import { ChakraProvider } from "@/lib/chakra-ui";
import { Head, NextPageWithLayout } from "@/lib/nextjs";
import { getAppLayout } from "@/utils/getAppLayout";
import netlifyCmsContent from "../assets/netlify-cms-content.json";

const name = "Home";
const description = "Home of all things UHSSE.";

export const HomePage: NextPageWithLayout = () => (
	<ChakraProvider>
		<Head page={name} description={description} />

		<Hero
			image={netlifyCmsContent.backgroundImage}
			heading={netlifyCmsContent.heading}
			subheading={netlifyCmsContent.subheading}
		/>
	</ChakraProvider>
);

HomePage.getLayout = getAppLayout;
