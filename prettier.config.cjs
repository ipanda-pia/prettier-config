module.exports = {
	trailingComma: 'none',
	tabWidth: 2,
	semi: true,
	singleQuote: true,
	jsxSingleQuote: true,
	printWidth: 80,
	bracketSpacing: true,
	jsxBracketSameLine: false,
	arrowParens: 'always',
	endOfLine: 'lf',
	useTabs: true,
	overrides: [
		{
			files: '*.md',
			options: {
				printWidth: 70,
				useTabs: false,
				arrowParens: 'avoid',
				proseWrap: 'never'
			}
		},
		{
			files: '*.{json,babelrc,eslintrc,remarkrc,prettierrc}',
			options: {
				useTabs: false,
				singleQuote: false
			}
		}
	]
};
