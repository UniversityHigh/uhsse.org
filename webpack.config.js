const merge = require("webpack-merge"),
	path = require("path"),
	paths = require("./paths"),
	CleanPlugin = require("clean-webpack-plugin"),
	ScriptExtHtmlPlugin = require("script-ext-html-webpack-plugin"),
	MiniCssExtractPlugin = require("mini-css-extract-plugin"),
	WebappPlugin = require("webapp-webpack-plugin");

module.exports = (_env, options) => {
	const isProduction = options.mode.toLowerCase() === "production";

	return merge(require("./webpack.frontend"), {
		devtool: isProduction ? "source-map" : "inline-source-map",
		output: {
			path: path.resolve("dist"),
			filename: "js/[name]-[hash].js"
		},
		module: {
			rules: [
				{
					test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
					loader:
						"url-loader?limit=10000&mimetype=application/font-woff",
					options: {
						name: "[name]-[hash].[ext]",
						outputPath: "fonts/"
					}
				},
				{
					test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
					loader: "file-loader",
					options: {
						name: "[name]-[hash].[ext]",
						outputPath: "fonts/"
					}
				},
				{
					test: /\.(jpg|jpeg|png|ico|svg|gif)$/,
					use: [
						{
							loader: "file-loader",
							options: {
								name: "[name]-[hash].[ext]",
								outputPath: "media/"
							}
						}
					]
				},
				{
					test: /.(sc|c|sa)ss$/,
					use: [
						isProduction
							? MiniCssExtractPlugin.loader
							: "style-loader",
						{
							loader: "css-loader",
							options: { minimize: "true" }
						},
						"postcss-loader",
						"sass-loader"
					]
				},
				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: ["babel-loader"]
				}
			]
		},
		plugins: [
			new ScriptExtHtmlPlugin({
				defaultAttribute: "defer"
			}),
			new MiniCssExtractPlugin({
				filename: "css/[name]-[hash].css"
			}),
			new WebappPlugin({
				logo: paths.favicon,
				prefix: "media/",
				inject: true,
				favicons: {
					background: "#fff",
					theme_color: "#00d1b2",
					display: "browser",
					icons: {
						android: true,
						appleIcon: true,
						appleStartup: false,
						coast: false,
						favicons: true,
						firefox: true,
						windows: true,
						yandex: true
					}
				}
			}),
			...(isProduction ? [new CleanPlugin("dist")] : [])
		]
	});
};
