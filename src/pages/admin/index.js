window.CMS_MANUAL_INIT = true;

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
				create: false,
				delete: false,
				editor: {
					preview: false
				},
				files: [
					{
						label: "Home",
						name: "home",
						file: "src/pages/home/index.json",
						fields: [
							{
								label: "Name",
								name: "name",
								widget: "string",
								hint: "Title at the top of the page"
							},
							{
								label: "Lead",
								name: "lead",
								widget: "string",
								hint: "Text underneath the title"
							},
							{
								label: "Image",
								name: "image",
								widget: "image",
								hint:
									"Background banner image at the top of the page"
							},
							{
								label: "Phone Number",
								name: "phoneNumber",
								widget: "string"
							},
							{
								label: "Directions Link",
								name: "directionsLink",
								widget: "string"
							},
							{
								label: "Gallery",
								name: "gallery",
								widget: "list",
								hint:
									"Slideshow of photos (with optional captions)",
								allow_add: true,
								fields: [
									{
										label: "Image",
										name: "link",
										widget: "image"
									},
									{
										label: "Caption",
										name: "caption",
										widget: "string",
										required: false
									}
								]
							},
							{
								label: "Pillars",
								name: "pillars",
								widget: "list",
								hint:
									"Three important characteristics of the school",
								allow_add: false,
								fields: [
									{
										label: "Name",
										name: "name",
										widget: "string"
									},
									{
										label: "Description",
										name: "description",
										widget: "string"
									}
								]
							}
						]
					}
				]
			}
		]
	}
});
