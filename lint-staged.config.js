// lint-staged.config.js
module.exports = {
	// Type check TypeScript files
	"**/*.(ts|tsx)": () => "npx tsc --noEmit",
	// Lint then format TypeScript files
	"**/*.(ts|tsx)": (filenames) => [
		`npx eslint --fix ${filenames.join(" ")}`,
		`npx prettier --write ${filenames.join(" ")}`,
	],

	// Format MarkDown and JSON
	"**/*.(md|json)": (filenames) => `npx prettier --write ${filenames.join(" ")}`,
};
