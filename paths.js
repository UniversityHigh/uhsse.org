const { readdirSync, statSync, existsSync } = require("fs"),
	{ resolve, join } = require("path"),
	getDirectories = path =>
		readdirSync(path).filter(directory =>
			statSync(join(path, directory)).isDirectory()
		),
	paths = {
		frontend: {
			root: resolve("./src/frontend")
		}
	};

function getFrontendPagePaths(page) {
	const pug = join(paths.frontend.pages, `${page}/index.pug`),
		javascript = join(paths.frontend.pages, `${page}/index.js`),
		css = join(paths.frontend.pages, `${page}/index.css`);

	return Object.freeze({
		...(existsSync(pug) && { pug }),
		...(existsSync(javascript) && { javascript }),
		...(existsSync(css) && { css })
	});
}

paths.frontend.pages = join(paths.frontend.root, "pages");
paths.frontend.pageNames = [];
paths.frontend.javascript = join(paths.frontend.root, "scripts");
paths.frontend.css = join(paths.frontend.root, "styles");
paths.frontend.media = join(paths.frontend.root, "media");
paths.frontend.partials = join(paths.frontend.root, "partials");
paths.frontend.data = join(paths.frontend.root, "data");
paths.frontend.globalData = join(paths.frontend.data, "globals.json");
paths.frontend.localData = join(paths.frontend.data, "locals.json");
paths.favicon = join(paths.frontend.media, "favicon.png");

for (let frontendPage of getDirectories(paths.frontend.pages)) {
	paths.frontend[frontendPage] = getFrontendPagePaths(frontendPage);
	paths.frontend.pageNames.push(frontendPage);
}

module.exports = Object.freeze(paths);
