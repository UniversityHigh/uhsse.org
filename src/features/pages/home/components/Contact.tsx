import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import {
	Avatar,
	Box,
	HStack,
	IconButton,
	Link,
	ListItem,
	Text,
} from "@chakra-ui/react";

type ContactProps = {
	readonly firstName: string;
	readonly lastName: string;
	readonly description: string;
	readonly email: string;
	readonly phone?: string;
};

export const Contact = ({
	firstName,
	lastName,
	description,
	email,
	phone,
}: ContactProps) => {
	const name = `${firstName} ${lastName}`;
	const hasPhone = !!phone;

	return (
		<HStack
			as={ListItem}
			alignItems="center"
			width="full"
			paddingY="2"
			spacing="4"
		>
			<Avatar name={name} />

			<Text overflowX="hidden" whiteSpace="nowrap" textOverflow="ellipsis">
				<Text as="b">{name}</Text>
				<br />
				{description}
			</Text>

			<Box as="span" sx={{ marginLeft: "auto !important" }}>
				{hasPhone && (
					<IconButton
						as={Link}
						paddingLeft="4"
						aria-label={`Call ${name}`}
						href={`tel:${phone}`}
						icon={<PhoneIcon />}
						variant="link"
					/>
				)}
				<IconButton
					as={Link}
					paddingLeft={hasPhone ? undefined : "4"}
					aria-label={`Email ${name}`}
					href={`mailto:${email}`}
					icon={<EmailIcon />}
					variant="link"
				/>
			</Box>
		</HStack>
	);
};
