import { Input, VStack } from "@chakra-ui/react";
import type { ReactNode } from "react";
import { useState } from "react";

type ContactsProps = {
	readonly children: (filter: string) => ReactNode;
};

export const Contacts = ({ children }: ContactsProps) => {
	const [filter, setFilter] = useState("");

	return (
		<VStack alignItems="flex-start" spacing="4">
			<Input
				position="sticky"
				zIndex="1"
				top="0"
				onChange={(event) => setFilter(event.target.value)}
				placeholder="Type to filter..."
				variant="filled"
			/>

			{children(filter)}
		</VStack>
	);
};
