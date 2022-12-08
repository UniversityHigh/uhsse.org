import { NETLIFY_CMS_CONTENT_PATH } from "@/config";
import type { CmsCollectionFile } from "netlify-cms-core";
import path from "path";

export const HOME_NETLIFY_COLLECTION_CONFIG: CmsCollectionFile = {
	label: "Home",
	name: "home",
	file: path.resolve(NETLIFY_CMS_CONTENT_PATH),
	fields: [
		{
			label: "Foo",
			name: "foo",
			widget: "string",
		},
	],
};
