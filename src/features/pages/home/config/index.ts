import { getNetlifyCmsPageContentPath } from "@/utils/getNetlifyCmsPageContentPath";
import type { CmsCollectionFile } from "netlify-cms-core";

export const HOME_NETLIFY_COLLECTION_CONFIG: CmsCollectionFile = {
	label: "Home",
	name: "home",
	file: getNetlifyCmsPageContentPath("home"),
	fields: [
		{
			label: "Foo",
			name: "foo",
			widget: "string",
		},
	],
};
