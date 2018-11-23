window.CMS_MANUAL_INIT = true;

import CMS, { init } from "netlify-cms";

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
				files: [
					{
						label: "Home",
						name: "home",
						file: "src/pages/home/index.json",
						fields: [
							{
								label: "Name",
								name: "name",
								widget: "string"
							},
							{
								label: "Lead",
								name: "lead",
								widget: "string"
							},
							{
								label: "Image",
								name: "image",
								widget: "image"
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
					},
					{
						label: "Information",
						name: "information",
						file: "src/pages/information/index.json",
						fields: [
							{
								label: "Name",
								name: "name",
								widget: "string"
							},
							{
								label: "Lead",
								name: "lead",
								widget: "string"
							},
							{
								label: "Image",
								name: "image",
								widget: "image"
							},
							{
								label: "Contacts",
								name: "contacts",
								widget: "object",
								fields: [
									{
										label: "Name",
										name: "name",
										widget: "string"
									},
									{
										label: "Lead",
										name: "lead",
										widget: "string"
									},
									{
										label: "Anchor ID",
										name: "anchorId",
										widget: "hidden"
									},
									{
										label: "Staff",
										name: "staff",
										widget: "list",
										fields: [
											{
												label: "Name",
												name: "name",
												widget: "string"
											},
											{
												label: "Position",
												name: "position",
												widget: "string"
											},
											{
												label: "Email",
												name: "email",
												widget: "string"
											},
											{
												label: "Website",
												name: "website",
												widget: "string",
												required: false
											}
										]
									},
									{
										label: "Support Services",
										name: "supportServices",
										widget: "list",
										fields: [
											{
												label: "Name",
												name: "name",
												widget: "string"
											},
											{
												label: "Position",
												name: "position",
												widget: "string"
											},
											{
												label: "Email",
												name: "email",
												widget: "string"
											},
											{
												label: "Phone",
												name: "phone",
												widget: "string"
											}
										]
									}
								]
							},
							{
								label: "Parent Organizations",
								name: "parentOrganizations",
								widget: "object",
								fields: [
									{
										label: "PTO",
										name: "pto",
										widget: "object",
										fields: [
											{
												label: "Officers",
												name: "officers",
												widget: "list",
												fields: [
													{
														label: "Name",
														name: "name",
														widget: "string"
													},
													{
														label: "Position",
														name: "position",
														widget: "string"
													},
													{
														label: "Email",
														name: "email",
														widget: "string",
														required: false
													}
												]
											},
											{
												label: "Meeting Dates",
												name: "meetingDates",
												widget: "object",
												fields: [
													{
														label: "Description",
														name: "description",
														widget: "string"
													},
													{
														label: "Dates",
														name: "dates",
														widget: "list",
														field: {
															label: "Date",
															name: "date",
															widget: "date",
															format:
																"MMMM D, YYYY"
														}
													}
												]
											},
											{
												label: "Meeting Minutes",
												name: "meetingMinutes",
												widget: "list",
												fields: [
													{
														label: "Date",
														name: "date",
														widget: "date",
														format: "MMMM YYYY"
													},
													{
														label: "Link",
														name: "link",
														widget: "string"
													}
												]
											},
											{
												label: "Fundraisers",
												name: "fundraisers",
												widget: "list",
												fields: [
													{
														label: "Name",
														name: "name",
														widget: "string"
													},
													{
														label: "Link",
														name: "link",
														widget: "string"
													}
												]
											}
										]
									},
									{
										label: "After Grad",
										name: "afterGrad",
										widget: "object",
										fields: [
											{
												label: "Meeting Dates",
												name: "meetingDates",
												widget: "object",
												fields: [
													{
														label: "Description",
														name: "description",
														widget: "string"
													},
													{
														label: "Dates",
														name: "dates",
														widget: "list",
														field: {
															label: "Date",
															name: "date",
															widget: "date",
															format:
																"MMMM D, YYYY"
														}
													}
												]
											},
											{
												label: "Donation Forms",
												name: "donationForms",
												widget: "list",
												fields: [
													{
														label: "Name",
														name: "name",
														widget: "string"
													},
													{
														label: "Link",
														name: "link",
														widget: "string"
													}
												]
											},
											{
												label: "Aids",
												name: "aids",
												widget: "list",
												fields: [
													{
														label: "Name",
														name: "name",
														widget: "string"
													},
													{
														label: "Link",
														name: "link",
														widget: "string",
														required: false
													}
												]
											},
											{
												label: "Updates",
												name: "updates",
												widget: "list",
												fields: [
													{
														label: "Name",
														name: "name",
														widget: "string"
													},
													{
														label: "Link",
														name: "link",
														widget: "string",
														required: false
													}
												]
											}
										]
									},
									{
										label: "SGC",
										name: "sgc",
										widget: "object",
										fields: [
											{
												label: "Meeting Dates",
												name: "meetingDates",
												widget: "object",
												fields: [
													{
														label: "Description",
														name: "description",
														widget: "string"
													},
													{
														label: "Dates",
														name: "dates",
														widget: "list",
														field: {
															label: "Date",
															name: "date",
															widget: "date",
															format:
																"MMMM D, YYYY"
														}
													}
												]
											},
											{
												label: "Meeting Minutes",
												name: "meetingMinutes",
												widget: "list",
												fields: [
													{
														label: "Date",
														name: "date",
														widget: "date",
														format: "MMMM YYYY"
													},
													{
														label: "Link",
														name: "link",
														widget: "string"
													}
												]
											},
											{
												label: "Members",
												name: "members",
												widget: "list",
												fields: [
													{
														label: "Name",
														name: "name",
														widget: "string"
													},
													{
														label: "Position",
														name: "position",
														widget: "string"
													},
													{
														label: "Email",
														name: "email",
														widget: "string",
														required: false
													}
												]
											}
										]
									}
								]
							},
							{
								label: "Resources",
								name: "resources",
								widget: "object",
								fields: [
									{
										label: "Name",
										name: "name",
										widget: "string"
									},
									{
										label: "lead",
										name: "lead",
										widget: "string"
									},
									{
										label: "Anchor ID",
										name: "anchorId",
										widget: "hidden"
									},
									{
										label: "Lunch Menu Link",
										name: "lunchMenuLink",
										widget: "string"
									},
									{
										label: "Resources",
										name: "resources",
										widget: "list",
										fields: [
											{
												label: "Name",
												name: "name",
												widget: "string"
											},
											{
												label: "Link",
												name: "link",
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
		]
	}
});
