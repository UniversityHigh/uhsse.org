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
							},
							{
								label: "Announcements",
								name: "announcements",
								widget: "list",
								field: {
									label: "Announcement",
									widget: "string"
								}
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
					},
					{
						label: "Academics",
						name: "academics",
						file: "src/pages/academics/index.json",
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
								label: "Departments",
								name: "departments",
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
										label: "Departments",
										name: "departments",
										widget: "list",
										fields: [
											{
												label: "Name",
												name: "name",
												widget: "string"
											},
											{
												label: "Description",
												name: "description",
												widget: "text",
												required: false
											},
											{
												label: "Courses",
												name: "courses",
												widget: "list",
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
													},
													{
														label: "Teachers",
														name: "teachers",
														widget: "list",
														fields: [
															{
																label: "Name",
																name: "name",
																widget: "string"
															},
															{
																label: "Email",
																name: "email",
																widget:
																	"string",
																required: false
															}
														]
													},
													{
														label: "AP",
														name: "isAP",
														widget: "boolean"
													},
													{
														label: "ECE",
														name: "isECE",
														widget: "boolean"
													},
													{
														label: "Honors",
														name: "isHonors",
														widget: "boolean"
													}
												]
											}
										]
									}
								]
							}
						]
					},
					{
						label: "Counseling",
						name: "counseling",
						file: "src/pages/counseling/index.json",
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
								label: "About",
								name: "about",
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
										label: "Mission Statement",
										name: "missionStatement",
										widget: "string"
									},
									{
										label: "Philosophy",
										name: "philosophy",
										widget: "object",
										fields: [
											{
												label: "Description",
												name: "description",
												widget: "string"
											},
											{
												label: "Principles",
												name: "principles",
												widget: "list",
												field: {
													label: "Principle",
													widget: "string"
												}
											}
										]
									},
									{
										label: "Links",
										name: "links",
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
								label: "Student Information",
								name: "studentInformation",
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
										label: "Description",
										name: "description",
										widget: "string"
									},
									{
										label: "Graduation Requirements",
										name: "graduationRequirements",
										widget: "list",
										fields: [
											{
												label: "Department",
												name: "department",
												widget: "string"
											},
											{
												label: "Credits",
												name: "credits",
												widget: "number",
												valueType: "float"
											}
										]
									},
									{
										label: "SAT",
										name: "sat",
										widget: "object",
										fields: [
											{
												label: "Test Dates",
												name: "testDates",
												widget: "list",
												field: {
													label: "Date",
													widget: "date",
													format: "MMMM D, YYYY"
												}
											},
											{
												label: "Registration Deadlines",
												name: "registrationDeadlines",
												widget: "list",
												field: {
													label: "Deadline",
													widget: "date",
													format: "MMMM D, YYYY"
												}
											},
											{
												label: "Link",
												name: "link",
												widget: "string"
											}
										]
									},
									{
										label: "ACT",
										name: "act",
										widget: "object",
										fields: [
											{
												label: "Test Dates",
												name: "testDates",
												widget: "list",
												field: {
													label: "Date",
													widget: "date",
													format: "MMMM D, YYYY"
												}
											},
											{
												label: "Registration Deadlines",
												name: "registrationDeadlines",
												widget: "list",
												field: {
													label: "Deadline",
													widget: "date",
													format: "MMMM D, YYYY"
												}
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
					},
					{
						label: "Extracurriculars",
						name: "extracurriculars",
						file: "src/pages/extracurriculars/index.json",
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
								label: "Athletics",
								name: "athletics",
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
										label: "Seasons",
										name: "seasons",
										widget: "list",
										fields: [
											{
												label: "Name",
												name: "name",
												widget: "string"
											},
											{
												label: "Sports",
												name: "sports",
												widget: "list",
												fields: [
													{
														label: "Name",
														name: "name",
														widget: "string"
													},
													{
														label: "Coaches",
														name: "coaches",
														widget: "list",
														fields: [
															{
																label: "Name",
																name: "name",
																widget: "string"
															},
															{
																label: "Email",
																name: "email",
																widget:
																	"string",
																required: false
															}
														]
													},
													{
														label: "Schedule",
														name: "schedule",
														widget: "string",
														required: false
													}
												]
											}
										]
									},
									{
										label: "Links",
										name: "links",
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
								label: "Activities",
								name: "activities",
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
										label: "Schedule",
										name: "schedule",
										widget: "string"
									},
									{
										label: "Activities",
										name: "activities",
										widget: "list",
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
											},
											{
												label: "Leaders",
												name: "leaders",
												widget: "list",
												fields: [
													{
														label: "Name",
														name: "name",
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
												label: "Room Numbers",
												name: "roomNumbers",
												widget: "list",
												required: false,
												field: {
													label: "Room Number",
													widget: "number"
												}
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
							}
						]
					},
					{
						label: "Prospective Students",
						name: "prospective",
						file: "src/pages/prospective/index.json",
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
								label: "Application",
								name: "application",
								widget: "object",
								fields: [
									{
										label: "Link",
										name: "link",
										widget: "string"
									},
									{
										label: "Deadline",
										name: "deadline",
										widget: "date",
										format: "MMM. D"
									},
									{
										label: "Steps",
										name: "steps",
										widget: "list",
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
								label: "Incoming Students",
								name: "incomingStudentInstructions",
								widget: "object",
								fields: [
									{
										label: "Description",
										name: "description",
										widget: "string"
									},
									{
										label: "Tests",
										name: "tests",
										widget: "list",
										field: {
											label: "Test",
											widget: "string"
										}
									}
								]
							},
							{
								label: "Open Houses",
								name: "openHouses",
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
										fields: [
											{
												label: "Date",
												name: "date",
												widget: "date",
												format: "dddd MMMM D, YYYY"
											},
											{
												label: "Time",
												name: "time",
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
