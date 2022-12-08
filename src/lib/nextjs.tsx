import BaseHead from "next/head";

type HeadProps = {
	readonly page: string;
	readonly description: string;
};

export const Head = ({ page, description }: HeadProps) => (
	<BaseHead>
		<meta content={description} name="description" />

		<title>{page}</title>
	</BaseHead>
);
