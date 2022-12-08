import path from "path";

export const IS_DEVELOPMENT = process.env.NODE_ENV === "development";

export const NETLIFY_CMS_GLOBALS_PATH = path.resolve(
	"./src/assets/netlify-cms-globals.json"
);
