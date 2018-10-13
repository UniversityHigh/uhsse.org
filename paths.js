const { lstatSync, readdirSync } = require("fs"),
	{ join, basename } = require("path"),
	path = require("path"),
	isDirectory = source => lstatSync(source).isDirectory(),
	getDirectories = source =>
		readdirSync(source)
			.map(name => join(source, name))
			.filter(isDirectory)
			.map(name => basename(name)),
	paths = {
		frontend: {
			root: path.resolve("./src/frontend")
		}
	};

function getFrontendPagePaths(page) {
	return Object.freeze({
		pug: path.join(paths.frontend.pages, `${page}/index.pug`),
		javascript: path.join(paths.frontend.pages, `${page}/index.js`),
		css: path.join(paths.frontend.pages, `${page}/index.css`)
	});
}

paths.frontend.pages = path.join(paths.frontend.root, "pages");
paths.frontend.pageNames = [];
paths.frontend.javascript = path.join(paths.frontend.root, "scripts");
paths.frontend.css = path.join(paths.frontend.root, "styles");
paths.frontend.media = path.join(paths.frontend.root, "media");
paths.frontend.partials = path.join(paths.frontend.root, "partials");
paths.frontend.data = path.join(paths.frontend.root, "data");
paths.frontend.globalData = path.join(paths.frontend.data, "globals.json");
paths.frontend.localData = path.join(paths.frontend.data, "locals.json");
paths.favicon = path.join(paths.frontend.media, "favicon.png");

for (let frontendPage of getDirectories(paths.frontend.pages)) {
	paths.frontend[frontendPage] = getFrontendPagePaths(frontendPage);
	paths.frontend.pageNames.push(frontendPage);
}

module.exports = Object.freeze(paths);
