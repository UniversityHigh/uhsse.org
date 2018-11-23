const paths = require("./paths"),
	HtmlPlugin = require("html-webpack-plugin");

const config = {
		entry: {
			shared: `${paths.javascript}/shared.js`
		},
		module: {
			rules: [
				{
					test: /.pug$/,
					include: paths.partials,
					use: "pug-loader"
				}
			]
		},
		plugins: [],
		devServer: {
			historyApiFallback: {
				rewrites: [
					{
						from: /^\//,
						to: context => `${context.parsedUrl.pathname}.html`
					}
				]
			}
		}
	},
	globals = require(paths.globals);

for (let page of paths.pageNames) {
	const pug = paths[page].pug,
		javascript = paths[page].javascript,
		hasPug = pug !== undefined;
	hasJavascript = javascript !== undefined;

	if (hasJavascript) {
		config.entry[page] = javascript;
	}

	if (hasPug) {
		config.plugins.push(
			new HtmlPlugin({
				template: paths[page].pug,
				filename: page === "home" ? "index.html" : `${page}.html`,
				chunks: ["shared", ...(hasJavascript ? [page] : [])],
				minify: {
					collapseWhitespace: true,
					removeComments: true,
					removeRedundantAttributes: true,
					removeScriptTypeAttributes: true,
					removeStyleLinkTypeAttributes: true,
					useShortDoctype: true,
					removeAttributeQuotes: true,
					removeEmptyAttributes: true,
					sortAttributes: true,
					sortClassName: true
				}
			})
		);

		config.module.rules.push({
			test: /.pug$/,
			include: paths[page].pug,
			use: [
				{
					loader: "apply-loader",
					options: {
						args: [
							{
								...globals,
								...(paths[page].json &&
									require(paths[page].json))
							}
						]
					}
				},
				"pug-loader"
			]
		});
	}
}

module.exports = config;
