// import { Configuration } from 'webpack';
const path = require('path');
/**
 * @type {Configuration}
 */
const config = {
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, './build'),
		filename: 'index.js',
	},
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
				use: [
					{
						loader: 'url-loader',
						options: {
							name: 'image/[name].[hash:6].[ext]',
							limit: 100 * 1024, // 单位为bit
						},
					},
				],
			},
		],
	},
};

module.exports = config;
