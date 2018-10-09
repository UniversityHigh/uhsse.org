const paths = require("./paths"),
	{ ProvidePlugin } = require("webpack"),
	HtmlPlugin = require("html-webpack-plugin");

const config = {
	entry: {
		shared: `${paths.frontend.javascript}/shared.js`,
		home: paths.frontend.home.javascript,
		information: paths.frontend.information.javascript,
		academics: paths.frontend.academics.javascript,
		counseling: paths.frontend.counseling.javascript,
		extracurriculars: paths.frontend.extracurriculars.javascript,
		alumni: paths.frontend.alumni.javascript,
		prospective: paths.frontend.prospective.javascript
	},
	module: {
		rules: [
			{
				test: /.pug$/,
				include: paths.frontend.partials,
				use: [
					{
						loader: "html-loader",
						options: {
							minimize: true,
							removeAttributeQuotes: false,
							attrs: [":src"]
						}
					},
					{
						loader: "pug-html-loader",
						options: {
							data: require(paths.frontend.globalData)
						}
					}
				]
			}
		]
	},
	plugins: []
};

for (let page of paths.frontend.pageNames) {
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
				loader: "html-loader",
				options: {
					minimize: true,
					removeAttributeQuotes: false,
					attrs: [":src"]
				}
			},
			{
				loader: "pug-html-loader",
				options: {
					data: {
						...require(paths.frontend.globalData),
						...require(paths.frontend.localData)[page]
					}
				}
			}
		]
	});
}

module.exports = config;
