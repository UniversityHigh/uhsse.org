// @ts-check

/** @type {import('eslint').Linter.Config} */
module.exports = {
	root: true,
	extends: [
		"eslint:recommended",
		"next/core-web-vitals",
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/recommended-requiring-type-checking",
		"plugin:prettier/recommended",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		tsConfigRootDir: __dirname,
		project: ["./tsconfig.json"],
	},
	plugins: ["@typescript-eslint", "prefer-arrow", "chakra-ui"],
	rules: {
		"@typescript-eslint/consistent-type-imports": "error",

		"prefer-arrow/prefer-arrow-functions": [
			"error",
			{
				disallowPrototype: true,
				singleReturnOnly: false,
				classPropertiesAllowed: false,
			},
		],

		"chakra-ui/props-order": "error",
		"chakra-ui/props-shorthand": [
			"error",
			{
				noShorthand: true,
			},
		],
		"chakra-ui/require-specific-component": "error",
	},
};
