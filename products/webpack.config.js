const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	mode: 'development',
	devServer: {
		port: 8081,
	},
	// this plugins used to map & inject genretaed js file into the index.html file so that browser can able to read compiled files
	/* So, this plugin is gonna take a look at whatever files are coming out of our Webpack process.
It's going to find those file names, and then add the appropriate script tags automatically behind the scenes to this HTML snippet right here.
  */

	plugins: [
		new ModuleFederationPlugin({
			name: 'products',
			filename: 'remoteEntry.js',
			exposes: {
				'./ProductsIndex': './src/index',
			},
		}),
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
	],
};
