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
			padding="32"
			background={`linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(${image})`}
			backgroundSize="cover"
			backgroundRepeat="no-repeat"
			backgroundPosition="50%"
		>
			<Container maxWidth="container.xl" experimental_spaceY="4">
				<Heading as="h2" size="2xl" color="white" noOfLines={1}>
					{heading}
				</Heading>

				{hasSubheading && (
					<Heading
						as="h3"
						size="lg"
						fontWeight="normal"
						color="white"
						noOfLines={1}
					>
						{subheading}
					</Heading>
				)}
			</Container>
		</Box>
	);
};
