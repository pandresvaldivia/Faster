const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const copyPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js',
	},
	resolve: {
		extensions: ['.js'],
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.css$/i,
				use: [miniCssExtractPlugin.loader, 'css-loader'],
			},
			{
				test: /\.(woff(2)?|ttf|eot|svg)$/,
				type: 'asset/resource',
				generator: {
					filename: './assets/fonts/[name][ext]',
				},
			},
			{
				test: /\.png$/,
				type: 'asset/resource',
				generator: {
					filename: './assets/images/[name][ext]',
				},
			},
		],
	},
	plugins: [
		new htmlWebpackPlugin({
			inject: true,
			template: './public/index.html',
			filename: './index.html',
		}),
		new miniCssExtractPlugin(),
		new copyPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, 'src', 'assets/images'),
					to: 'assets/images',
				},
				{
					from: path.resolve(__dirname, 'src', 'assets/favicon'),
					to: 'assets/favicon',
				},
				{
					from: path.resolve(__dirname, 'src', 'assets/videos'),
					to: 'assets/videos',
				},
			],
		}),
	],
};
