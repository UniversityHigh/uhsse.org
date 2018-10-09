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
			root: "src/frontend/"
		}
	};

function getFrontendPagePaths(page) {
	return Object.freeze({
		pug: path.resolve(`${paths.frontend.pages}/${page}/index.pug`),
		javascript: path.resolve(`${paths.frontend.pages}/${page}/index.js`),
		css: path.resolve(`${paths.frontend.pages}${page}/index.css`)
	});
}

paths.frontend.pages = path.resolve(`${paths.frontend.root}pages/`);
paths.frontend.pageNames = [];
paths.frontend.javascript = path.resolve(`${paths.frontend.root}scripts/`);
paths.frontend.css = path.resolve(`${paths.frontend.root}styles/`);
paths.frontend.partials = path.resolve(`${paths.frontend.root}partials/`);
paths.frontend.data = path.resolve(`${paths.frontend.root}data/`);
paths.frontend.globalData = path.resolve(`${paths.frontend.data}/globals.json`);
paths.frontend.localData = path.resolve(`${paths.frontend.data}/locals.json`);

for (let frontendPage of getDirectories(paths.frontend.pages)) {
	paths.frontend[frontendPage] = getFrontendPagePaths(frontendPage);
	paths.frontend.pageNames.push(frontendPage);
}

module.exports = Object.freeze(paths);
