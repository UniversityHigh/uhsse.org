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
							label: "Title",
							name: "title",
							hint: "Title of the site, displayed in the browser's tab and the page's navigation bar",
						},
						{
							label: "Links",
							label_singular: "Link",
							name: "links",
							hint: "A list of external (not UHSSE.org) links, displayed in the navigation bar's hamburger menu",
							widget: "list",
							required: false,
							max: 5,
							fields: [
								{
									label: "Name",
									name: "name",
									widget: "string",
									hint: "Display name of the link, visible when the navigation bar's hamburger menu is expanded",
								},
								{
									label: "URL",
									name: "url",
									widget: "string",
									hint: "External URL to navigate to when the link is clicked",
								},
							],
						},
					],
				},
			],
		},
		{
			label: "Pages",
			name: "pages",
			description: "Top-level pages of the site",
			create: false,
			delete: false,
			editor: {
				preview: false,
			},
			files: [HOME_NETLIFY_COLLECTION_CONFIG],
		},
	],
};
