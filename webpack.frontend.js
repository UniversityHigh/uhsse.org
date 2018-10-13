const paths = require("./paths"),
	HtmlPlugin = require("html-webpack-plugin");

const config = {
		entry: {
			shared: `${paths.frontend.javascript}/shared.js`
		},
		module: {
			rules: [
				{
					test: /.pug$/,
					include: paths.frontend.partials,
					use: "pug-loader"
				}
			]
		},
		plugins: []
	},
	globalData = require(paths.frontend.globalData),
	localData = require(paths.frontend.localData);

for (let page of paths.frontend.pageNames) {
	const entry = paths.frontend[page].javascript,
		hasEntry = paths.frontend[page].javascript !== undefined;
	if (hasEntry) config.entry[page] = entry;

	config.plugins.push(
		new HtmlPlugin({
			template: paths.frontend[page].pug,
			filename: page === "home" ? "index.html" : `${page}.html`,
			chunks: ["shared", ...(hasEntry ? [page] : [])]
		})
	);

	config.module.rules.push({
		test: /.pug$/,
		include: paths.frontend[page].pug,
		use: [
			{
				loader: "apply-loader",
				options: {
					args: [
						{
							...globalData,
							...localData[page]
						}
					]
				}
			},
			"pug-loader"
		]
	});
}

module.exports = config;
