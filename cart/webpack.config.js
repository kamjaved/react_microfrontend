const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

exports.default = {
	mode: 'development',
	devServer: {
		port: 8082,
	},
	plugins: [
		new ModuleFederationPlugin({
			name: 'cart',
			filename: 'remoteEntry.js',
			exposes: {
				'./CartShow': './src/bootstrap',
			},
			shared: {
				faker: {
					singleton: true,
				},
			}, // more info in readme.md file
		}),
		new HtmlWebpackPlugin({
			// more info in readme.md file
			template: './public/index.html',
		}),
	],
};
