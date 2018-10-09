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
};

for (let page of paths.frontend.pageNames) {
	config.entry[page] = paths.frontend[page].javascript;

	config.plugins.push(
		new HtmlPlugin({
			template: paths.frontend[page].pug,
			filename: page === "home" ? "index.html" : `${page}.html`,
			chunks: ["shared", page]
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
							...require(paths.frontend.globalData),
							...require(paths.frontend.localData)[page]
						}
					]
				}
			},
			"pug-loader"
		]
	});
}

module.exports = config;
