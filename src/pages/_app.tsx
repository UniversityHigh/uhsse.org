import type { AppPropsWithLayout } from "@/lib/nextjs";

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
	const getLayout = Component.getLayout ?? ((page) => page);
	return getLayout(<Component {...pageProps} />);
};

export default App;
