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
		// assetModuleFilename: 'img/[name].[hash:6][ext]'
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
				type: 'asset',
				generator: {
					filename: 'img/[name][hash:6][ext]',
				},
				parser: {
					dataUrlCondition: {
						maxSize: 100 * 1024
					}
				}
			},
			{
				test: /\.(ttf|eot|woff2?)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'font/[name].[hash:6][ext]'
				}
			}
		],
	},
	
};

module.exports = config;
