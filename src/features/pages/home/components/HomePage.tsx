import { ChakraProvider } from "@/lib/chakra-ui";
import { Head, NextPageWithLayout } from "@/lib/nextjs";
import { getAppLayout } from "@/utils/getAppLayout";

const name = "Home";
const description = "Home of all things UHSSE.";

export const HomePage: NextPageWithLayout = () => (
	<ChakraProvider>
		<Head page={name} description={description} />
	</ChakraProvider>
);

HomePage.getLayout = getAppLayout;
