import {
	Box,
	Popover,
	PopoverAnchor,
	PopoverBody,
	PopoverCloseButton,
	PopoverContent,
	PopoverHeader,
} from "@chakra-ui/react";
import { ReactNode } from "react";

type AnnouncerProps = {
	readonly children?: ReactNode;
};

export const Announcer = ({ children }: AnnouncerProps) => {
	const hasChildren = !!children;

	if (!hasChildren) {
		return null;
	}

	return (
		<Popover
			defaultIsOpen
			closeOnBlur={false}
			closeOnEsc={false}
			offset={[0, 0]}
			placement="right-end"
		>
			<PopoverAnchor>
				<Box position="absolute" bottom="0" right="0" />
			</PopoverAnchor>

			<PopoverContent
				width="sm"
				marginRight="4"
				marginBottom="4"
				backgroundColor="brand.600"
				color="white"
			>
				<PopoverCloseButton />

				<PopoverHeader fontWeight="600" boxShadow="sm">
					Announcements
				</PopoverHeader>

				<PopoverBody backgroundColor="brand.50" color="black">
					<Box overflowY="auto" maxHeight="sm">
						{children}
					</Box>
				</PopoverBody>
			</PopoverContent>
		</Popover>
	);
};
