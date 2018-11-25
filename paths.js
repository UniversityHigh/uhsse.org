const { readdirSync, statSync, existsSync } = require("fs"),
	{ resolve, join } = require("path"),
	getDirectories = path =>
		readdirSync(path).filter(directory =>
			statSync(join(path, directory)).isDirectory()
		),
	paths = {
		root: resolve("./src/")
	};

function getPagePaths(page) {
	const pug = join(paths.pages, `${page}/index.pug`),
		javascript = join(paths.pages, `${page}/index.js`),
		css = join(paths.pages, `${page}/index.css`),
		json = join(paths.pages, `${page}/index.json`),
		config = join(paths.pages, `${page}/config.json`);

	return Object.freeze({
		...(existsSync(pug) && { pug }),
		...(existsSync(javascript) && { javascript }),
		...(existsSync(css) && { css }),
		...(existsSync(json) && { json }),
		...(existsSync(config) && { config })
	});
}

paths.pages = join(paths.root, "pages");
paths.pageNames = [];
paths.javascript = join(paths.root, "scripts");
paths.css = join(paths.root, "styles");
paths.media = join(paths.root, "media");
paths.partials = join(paths.root, "partials");
paths.globals = join(paths.root, "config/globals.json");
paths.favicon = join(paths.media, "favicon.png");

for (let page of getDirectories(paths.pages)) {
	paths[page] = getPagePaths(page);
	paths.pageNames.push(page);
}

module.exports = Object.freeze(paths);
