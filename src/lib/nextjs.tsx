import globals from "@/assets/netlify-cms-globals.json";
import BaseHead from "next/head";

type HeadProps = {
	readonly page: string;
	readonly description: string;
	readonly titleSeparator?: string;
};

export const Head = ({
	page,
	description,
	titleSeparator = " | ",
}: HeadProps) => (
	<BaseHead>
		<meta content={description} name="description" />

		<title>
			{page}
			{titleSeparator}
			{globals.title}
		</title>
	</BaseHead>
);
