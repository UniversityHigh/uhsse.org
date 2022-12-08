import { getNetlifyCmsPageContentPath } from "@/utils/getNetlifyCmsPageContentPath";
import type { CmsCollectionFile } from "netlify-cms-core";

export const HOME_NETLIFY_COLLECTION_CONFIG: CmsCollectionFile = {
	label: "Home",
	name: "home",
	file: getNetlifyCmsPageContentPath("home"),
	fields: [
		{
			label: "Background Image",
			name: "BackgroundImage",
			widget: "image",
			allow_multiple: false,
			hint: "Image displayed at the top of the page, behind the heading and subheading text. Ideally, this should be a high resolution image.",
		},
		{
			label: "Heading",
			name: "Heading",
			widget: "string",
			hint: "Heading displayed at the top of the page, in front of the background image. Normally, this should be the name of the page.",
		},
		{
			label: "Subheading",
			name: "Subheading",
			widget: "string",
			required: false,
			hint: "Subheading displayed at the top of the page, below the heading. This should be a short, catchy line that describes the page.",
		},
	],
};
