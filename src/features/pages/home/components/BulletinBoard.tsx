import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import type { ReactNode } from "react";
import { Children } from "react";

type BulletinBoardProps = {
	readonly tabs: readonly string[];
	readonly children: ReactNode;
};

export const BulletinBoard = ({ tabs, children }: BulletinBoardProps) => (
	<Tabs
		overflowX="hidden"
		isFitted
		isLazy
		lazyBehavior="keepMounted"
		variant="solid-enclosed"
	>
		<TabList>
			{tabs.filter(Boolean).map((tab) => (
				<Tab key={tab}>{tab}</Tab>
			))}
		</TabList>

		<TabPanels>
			{Children.map(children, (child) => (
				<TabPanel overflowX="hidden" overflowY="auto" height="md">
					{child}
				</TabPanel>
			))}
		</TabPanels>
	</Tabs>
);
