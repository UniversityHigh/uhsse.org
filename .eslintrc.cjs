// @ts-check

/** @type {import('eslint').Linter.Config} */
module.exports = {
	root: true,
	extends: [
		"eslint:recommended",
		"next/core-web-vitals",
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/recommended-requiring-type-checking",
		"plugin:sonarjs/recommended",
		"plugin:prettier/recommended",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		tsConfigRootDir: __dirname,
		project: ["./tsconfig.json"],
	},
	plugins: ["@typescript-eslint", "sonarjs", "prefer-arrow", "chakra-ui"],
	rules: {
		// TypeScript
		// https://github.com/typescript-eslint/typescript-eslint
		"@typescript-eslint/consistent-type-definitions": ["error", "type"],
		"@typescript-eslint/consistent-type-imports": "error",

		// Prefer Arrow
		// https://github.com/TristonJ/eslint-plugin-prefer-arrow
		"prefer-arrow/prefer-arrow-functions": [
			"error",
			{
				disallowPrototype: true,
				singleReturnOnly: false,
				classPropertiesAllowed: false,
			},
		],

		// Chakra UI
		// https://github.com/yukukotani/eslint-plugin-chakra-ui
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
