import { tabsAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

// Chakra UI causes this rule to error.
// eslint-disable-next-line @typescript-eslint/unbound-method
const { definePartsStyle, defineMultiStyleConfig } =
	createMultiStyleConfigHelpers(tabsAnatomy.keys);

type TabsVariant = ReturnType<typeof definePartsStyle>;

const solidEnclosedVariant = definePartsStyle({
	root: {
		border: "none",
	},
	tab: {
		border: "none",
		borderTopRadius: "md",
		_selected: {
			backgroundColor: "brand.600",
			boxShadow: "sm",
			color: "white",
		},
	},
	tablist: {
		borderBottomWidth: "1px",
		borderBottomColor: "brand.600",
	},
	tabpanel: {
		borderBottomRadius: "md",
		backgroundColor: "brand.50",
	},
}) satisfies TabsVariant;

type TabsVariants = Exclude<
	Parameters<typeof defineMultiStyleConfig>[0]["variants"],
	undefined
>;

const variants = {
	"solid-enclosed": solidEnclosedVariant,
} satisfies TabsVariants;

export const Tabs = defineMultiStyleConfig({ variants });
