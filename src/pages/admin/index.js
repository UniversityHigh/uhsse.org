window.CMS_MANUAL_INIT = true;

import { init } from "netlify-cms";

init({
	config: {
		backend: {
			name: "github",
			repo: "UniversityHigh/uhsse.org"
		},
		media_folder: "src/media",
		public_folder: "/media",
		collections: [
			{
				label: "Pages",
				name: "pages",
				create: false,
				delete: false,
				editor: {
					preview: false
				},
				files: NETLIFY_CMS_CONFIG
			}
		]
	}
});
