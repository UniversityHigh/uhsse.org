const merge = require("webpack-merge"),
	path = require("path"),
	CleanPlugin = require("clean-webpack-plugin"),
	ScriptExtHtmlPlugin = require("script-ext-html-webpack-plugin"),
	MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (_env, options) => {
	const isProduction = options.mode.toLowerCase() === "production",
		config = merge(require("./webpack.frontend"), {
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
							"url-loader?limit=10000&mimetype=application/font-woff"
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
				})
			]
		});

	if (isProduction) config.plugins.push(new CleanPlugin("dist"));

	return config;
};
