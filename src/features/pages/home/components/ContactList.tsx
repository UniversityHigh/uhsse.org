import { Input, List, VStack } from "@chakra-ui/react";
import type { ReactNode } from "react";
import { useState } from "react";

type ContactListProps = {
	readonly children: (filter: string) => ReactNode;
};

export const ContactList = ({ children }: ContactListProps) => {
	const [filter, setFilter] = useState("");

	return (
		<>
			<Input
				position="sticky"
				zIndex="1"
				top="0"
				marginBottom="4"
				_focus={{
					backgroundColor: "white",
				}}
				onChange={(event) => setFilter(event.target.value)}
				placeholder="Type to filter..."
				variant="filled"
			/>

			<VStack as={List} alignItems="flex-start" spacing="4">
				{children(filter)}
			</VStack>
		</>
	);
};
