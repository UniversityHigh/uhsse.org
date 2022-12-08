import path from "path";

export const getNetlifyCmsPageContentPath = (page: string): string =>
	path.resolve(`./src/features/pages/${page}/assets/netlify-cms-content.json`);
