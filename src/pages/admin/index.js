window.CMS_MANUAL_INIT = false;

import CMS, { init } from "netlify-cms";

init({
	config: {
		backend: {
			name: "github",
			repo: "UniversityHigh/uhsse.org"
		},
		media_folder: "src/media",
		collections: [
			{
				label: "Pages",
				name: "pages",
				files: []
			}
		]
	}
});
