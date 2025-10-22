import { FlatCompat } from "@eslint/eslintrc"
import js from "@eslint/js"
import nextPlugin from "@next/eslint-plugin-next"
import reactPlugin from "eslint-plugin-react"
import reactHooksPlugin from "eslint-plugin-react-hooks"
import typescriptEslint from "@typescript-eslint/eslint-plugin"
import typescriptParser from "@typescript-eslint/parser"

const compat = new FlatCompat({
	baseDirectory: import.meta.dirname,
})

export default [
	// Base JavaScript configuration
	js.configs.recommended,

	// TypeScript files
	{
		files: ["**/*.{ts,tsx}"],
		languageOptions: {
			parser: typescriptParser,
			parserOptions: {
				ecmaVersion: "latest",
				sourceType: "module",
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
		plugins: {
			"@typescript-eslint": typescriptEslint,
			react: reactPlugin,
			"react-hooks": reactHooksPlugin,
			"@next/next": nextPlugin,
		},
		rules: {
			// TypeScript specific rules
			"@typescript-eslint/no-unused-vars": [
				"error",
				{ argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
			],
			"@typescript-eslint/no-explicit-any": "warn",

			// React specific rules
			"react/react-in-jsx-scope": "off", // Not needed in React 17+
			"react/prop-types": "off", // TypeScript handles this
			"react/display-name": "off",

			// General rules
			"no-console": ["warn", { allow: ["warn", "error"] }],
			"prefer-const": "error",
			"no-var": "error",
		},
		settings: {
			react: {
				version: "detect",
			},
		},
	},

	// JavaScript and JSX files
	{
		files: ["**/*.{js,jsx}"],
		languageOptions: {
			ecmaVersion: "latest",
			sourceType: "module",
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
		plugins: {
			react: reactPlugin,
			"react-hooks": reactHooksPlugin,
			"@next/next": nextPlugin,
		},
		rules: {
			...reactPlugin.configs.recommended.rules,
			...reactHooksPlugin.configs.recommended.rules,
			...nextPlugin.configs.recommended.rules,

			"react/react-in-jsx-scope": "off",
			"react/prop-types": "off",
			"no-console": ["warn", { allow: ["warn", "error"] }],
		},
		settings: {
			react: {
				version: "detect",
			},
		},
	},

	// Configuration files
	{
		files: ["**/*.config.{js,mjs,ts}"],
		rules: {
			"no-console": "off",
		},
	},

	// Ignore patterns
	{
		ignores: [
			"node_modules/**",
			".next/**",
			"dist/**",
			"build/**",
			"coverage/**",
			"public/**",
		],
	},
]