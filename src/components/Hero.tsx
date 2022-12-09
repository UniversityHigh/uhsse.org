import { Box, Container, Heading } from "@chakra-ui/react";

type HeroProps = {
	readonly image: string;
	readonly heading: string;
	readonly subheading?: string;
};

export const Hero = ({ image, heading, subheading }: HeroProps) => {
	const hasSubheading = !!subheading;

	return (
		<Box
			as="header"
			padding="32"
			background={`linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(${image})`}
			backgroundSize="cover"
			backgroundPosition="50%"
			backgroundRepeat="no-repeat"
		>
			<Container maxWidth="container.xl" experimental_spaceY="4">
				<Heading as="h2" color="white" noOfLines={1} size="2xl">
					{heading}
				</Heading>

				{hasSubheading && (
					<Heading
						as="h3"
						color="white"
						fontWeight="normal"
						noOfLines={1}
						size="lg"
					>
						{subheading}
					</Heading>
				)}
			</Container>
		</Box>
	);
};
