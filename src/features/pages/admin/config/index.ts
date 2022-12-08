import { HOME_NETLIFY_COLLECTION_CONFIG } from "@/features/pages/home";
import type { CmsConfig } from "netlify-cms-core";

export const NETLIFY_CMS_CONFIG: CmsConfig = {
	backend: {
		name: "github",
		repo: "UniversityHigh/uhsse.org",
		branch: "refactor",
	},
	media_folder: "public/media",
	public_folder: "media",
	collections: [
		{
			label: "Pages",
			name: "pages",
			create: false,
			delete: false,
			editor: {
				preview: false,
			},
			files: [HOME_NETLIFY_COLLECTION_CONFIG],
		},
	],
};
