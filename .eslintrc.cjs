// @ts-check

/** @type {import('eslint').Linter.Config} */
module.exports = {
	root: true,
	extends: [
		"eslint:recommended",
		"next/core-web-vitals",
		"plugin:@typescript-eslint/recommended",
		"plugin:prettier/recommended",
	],
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint", "prefer-arrow"],
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
	},
};
