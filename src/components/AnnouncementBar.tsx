import { Badge, HStack, Text, Tooltip } from "@chakra-ui/react";
import type { ReactNode } from "react";

type AnnouncementBarProps = {
	readonly children: ReactNode;
};

export const AnnouncementBar = ({ children }: AnnouncementBarProps) => {
	const hasChildren = !!children;

	if (!hasChildren) {
		return null;
	}

	return (
		<HStack
			justify="center"
			backgroundColor="brand.600"
			paddingX="6"
			paddingY="3"
			spacing="4"
		>
			<Badge variant="subtle">Announcement</Badge>

			<Tooltip label={children} placement="bottom-start">
				<Text color="white" fontSize="sm" noOfLines={1}>
					{children}
				</Text>
			</Tooltip>
		</HStack>
	);
};
