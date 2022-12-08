// @ts-check

/** @type {import('eslint').Linter.Config} */
module.exports = {
	extends: [
		"eslint:recommended",
		"next/core-web-vitals",
		"plugin:@typescript-eslint/recommended",
		"plugin:prettier/recommended",
	],
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint"],
	root: true,
};
