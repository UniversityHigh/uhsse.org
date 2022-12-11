import { Center, Spinner } from "@chakra-ui/react";
import LoadingIframe from "react-loading-iframe";

type SpinnerIframeProps = {
	readonly src: string;
};

export const SpinnerIframe = ({ src }: SpinnerIframeProps) => (
	<LoadingIframe
		skeleton={
			<Center height="inherit">
				<Spinner color="brand.600" />
			</Center>
		}
		src={src}
	/>
);
