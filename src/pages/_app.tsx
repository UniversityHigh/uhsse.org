import { ChakraProvider } from "@/lib/chakra-ui";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => (
	<ChakraProvider>
		<Component {...pageProps} />
	</ChakraProvider>
);

export default App;
