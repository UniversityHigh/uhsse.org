import { getNetlifyCmsPageContentPath } from "@/utils/getNetlifyCmsPageContentPath";
import type { CmsCollectionFile } from "netlify-cms-core";

export const HOME_NETLIFY_COLLECTION_CONFIG: CmsCollectionFile = {
	label: "Home",
	name: "home",
	file: getNetlifyCmsPageContentPath("home"),
	fields: [
		{
			label: "Background Image",
			name: "backgroundImage",
			widget: "image",
			allow_multiple: false,
		},
		{
			label: "Heading",
			name: "heading",
			widget: "string",
		},
		{
			label: "Subheading",
			name: "subheading",
			widget: "string",
			required: false,
		},
		{
			label: "Bulletin",
			name: "bulletin",
			widget: "markdown",
			required: false,
			modes: ["rich_text"],
			buttons: [
				"bold",
				"italic",
				"code",
				"link",
				"quote",
				"bulleted-list",
				"numbered-list",
			],
			editor_components: [],
		},
		{
			label: "Calendar Embed URL",
			name: "calendarEmbedUrl",
			widget: "string",
		},
		{
			label: "Lunch Menu File URL",
			name: "lunchMenuFileUrl",
			widget: "string",
		},
		{
			label: "Contacts",
			label_singular: "Contact",
			name: "contacts",
			widget: "list",
			fields: [
				{
					label: "First Name",
					name: "firstName",
					widget: "string",
				},
				{
					label: "Last Name",
					name: "lastName",
					widget: "string",
				},
				{
					label: "Description",
					name: "description",
					widget: "string",
				},
				{
					label: "Email",
					name: "email",
					widget: "string",
				},
				{
					label: "Phone",
					name: "phone",
					widget: "string",
					required: false,
				},
			],
		},
		{
			label: "Showcase",
			label_singular: "Showcase Item",
			name: "showcase",
			widget: "list",
			min: 3,
			max: 3,
			fields: [
				{
					label: "Heading",
					name: "heading",
					widget: "string",
				},
				{
					label: "Subheading",
					name: "subheading",
					widget: "string",
				},
				{
					label: "Image",
					name: "image",
					widget: "image",
					allow_multiple: false,
				},
			],
		},
	],
};
