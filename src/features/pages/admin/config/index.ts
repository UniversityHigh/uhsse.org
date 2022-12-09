import { IS_DEVELOPMENT, NETLIFY_CMS_GLOBALS_PATH } from "@/config";
import { HOME_NETLIFY_COLLECTION_CONFIG } from "@/features/pages/home";
import type { CmsConfig } from "netlify-cms-core";

export const NETLIFY_CMS_CONFIG: CmsConfig = {
	backend: {
		name: "github",
		repo: "UniversityHigh/uhsse.org",
		branch: "refactor",
	},
	local_backend: IS_DEVELOPMENT,
	media_folder: "public/media",
	public_folder: "media",
	collections: [
		{
			label: "Globals",
			name: "globals",
			description: "Site-wide settings and other global content",
			create: false,
			delete: false,
			editor: {
				preview: false,
			},
			files: [
				{
					label: "All",
					name: "all",
					file: NETLIFY_CMS_GLOBALS_PATH,
					fields: [
						{
							label: "School Name",
							name: "schoolName",
						},
						{
							label: "External Links",
							label_singular: "External Link",
							name: "externalLinks",
							widget: "list",
							required: false,
							max: 5,
							fields: [
								{
									label: "Name",
									name: "name",
									widget: "string",
								},
								{
									label: "URL",
									name: "url",
									widget: "string",
								},
							],
						},
						{
							label: "Announcement",
							name: "announcement",
							widget: "text",
							required: false,
						},
					],
				},
			],
		},
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
