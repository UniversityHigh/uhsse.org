import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";

type ShowcaseItemProps = {
	readonly heading: string;
	readonly subheading: string;
	readonly image: string;
};

export const ShowcaseItem = ({
	heading,
	subheading,
	image,
}: ShowcaseItemProps) => (
	<Card
		direction={{ base: "column", sm: "row" }}
		overflow="hidden"
		backgroundColor="brand.50"
		variant="filled"
	>
		<Image
			maxWidth={{ base: "100%", sm: "200px" }}
			objectFit="cover"
			alt={`Image representing "${heading}"`}
			src={image}
		/>

		<CardBody>
			<Heading fontWeight="600" size="md">
				{heading}
			</Heading>

			<Text paddingY="2">{subheading}</Text>
		</CardBody>
	</Card>
);
