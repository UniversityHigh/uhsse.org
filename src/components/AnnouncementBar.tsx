import { Badge, HStack, Text, Tooltip } from "@chakra-ui/react";
import { ReactNode } from "react";

type AnnouncementBarProps = {
	readonly children: ReactNode;
};

export const AnnouncementBar = ({ children }: AnnouncementBarProps) => (
	<HStack
		paddingX="6"
		paddingY="3"
		backgroundColor="brand.600"
		boxShadow="inner"
		spacing="4"
		wordBreak="break-word"
	>
		<Badge variant="subtle">Announcement</Badge>

		<Tooltip label={children} placement="bottom-start">
			<Text fontSize="sm" color="white" noOfLines={1}>
				{children}
			</Text>
		</Tooltip>
	</HStack>
);
