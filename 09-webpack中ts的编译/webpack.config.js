// import { Configuration } from 'webpack';
const path = require('path');

const { DefinePlugin } = require('webpack');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

/**
 * @type {Configuration}
 */
const config = {
	entry: './src/main.ts',
	output: {
		path: path.resolve(__dirname, './build'),
		filename: 'js/index.js',
	},
	mode: 'development',
	devtool: 'cheap-module-source-map',
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					{ loader: 'style-loader' },
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
						},
					},
					{ loader: 'postcss-loader' },
				],
			},
			{
				test: /\.less$/,
				use: [
					{ loader: 'style-loader' },
					{
						loader: 'css-loader',
						options: {
							importLoaders: 2,
						},
					},
					{ loader: 'less-loader' },
					{ loader: 'postcss-loader' },
				],
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/,
				type: 'asset',
				generator: {
					filename: 'img/[name][hash:6][ext]',
				},
				parser: {
					dataUrlCondition: {
						maxSize: 100 * 1024,
					},
				},
			},
			{
				test: /\.(ttf|eot|woff2?)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'font/[name].[hash:6][ext]',
				},
			},
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
					},
				],
			},
			{
				test: /\.ts$/,
				exclude: /node_modules/,
				use: [
					{loader: 'ts-loader'}
				]
			}
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: 'react',
			template: './public/index.html',
		}),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: 'public',
					globOptions: {
						ignore: ['**/index.html', '**/DS_Store', '**/star.png'],
					},
				},
			],
		}),
	],
};

module.exports = config;
