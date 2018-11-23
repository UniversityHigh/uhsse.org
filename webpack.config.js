const path = require("path"),
	paths = require("./paths"),
	merge = require("webpack-merge"),
	CleanPlugin = require("clean-webpack-plugin"),
	ScriptExtHtmlPlugin = require("script-ext-html-webpack-plugin"),
	MiniCssExtractPlugin = require("mini-css-extract-plugin"),
	WebappPlugin = require("webapp-webpack-plugin"),
	CopyPlugin = require("copy-webpack-plugin"),
	ImageminPlugin = require("imagemin-webpack-plugin").default;

module.exports = (_env, options) => {
	const isProduction = options.mode.toLowerCase() === "production";

	return merge(require("./webpack.dynamic"), {
		devtool: isProduction ? "source-map" : "inline-source-map",
		output: {
			path: path.resolve("dist"),
			filename: "js/[name]-[hash].js"
		},
		module: {
			rules: [
				{
					test: /\.woff(2)?$/,
					loader:
						"url-loader?limit=10000&mimetype=application/font-woff",
					options: {
						name: "[name]-[hash].[ext]",
						outputPath: "fonts/"
					}
				},
				{
					test: /\.(ttf|eot|svg)$/,
					loader: "file-loader",
					options: {
						name: "[name]-[hash].[ext]",
						outputPath: "fonts/"
					}
				},
				{
					test: /\.(jpg|jpeg|png|ico)$/,
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
						{
							loader: "sass-loader",
							options: {
								implementation: require("sass")
							}
						}
					]
				},
				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: "babel-loader"
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
				prefix: "media/favicons/",
				inject: true,
				favicons: {
					background: "#fff",
					theme_color: "#ff3860",
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
			...(isProduction
				? [
						new CleanPlugin("dist"),
						new CopyPlugin([
							{
								from: "src/humans.txt",
								to: "humans.txt",
								toType: "file"
							}
						]),
						new ImageminPlugin()
				  ]
				: [])
		]
	});
};
