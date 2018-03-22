const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		main: path.resolve(__dirname,'src','index.js')
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname,'build')
	},
	watch: true,
	module: {
		rules: [
		{
			test: /\.css$/,
			use: [
				{loader: 'style-loader'},
				{loader: 'css-loader'}
			]
		},
		{
			test: /\.scss$/,
			use: [
				{loader: 'style-loader'},
				{loader: 'css-loader'},
				{loader: 'sass-loader'}
			]
		},
		{
			test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 8000, 
                        }
                    }
                ]
        },
        {
        	test: /\.(woff|woff2|eot|ttf|otf)$/,
			loader: "file-loader",
			
        },
		]
	},
	stats: {
		children: false,
        chunks: false,
        colors: true,
        depth: false,
        entrypoints: false,
        errors: true,
        errorDetails: true,
        hash: true,
        modules: false,
        maxModules: 15,
        modulesSort: "field",
        performance: true,
        timings: true,
        version: true,
        warnings: false
	},	
	plugins: [
		new HtmlWebpackPlugin({template:'./static/index.template.html'}),
		new CopyWebpackPlugin([
			{ from: 'static/img/*.*'},
			
		]),
		new webpack.ProvidePlugin({
		    $: 'jquery',
		    jQuery: 'jquery',
		    'window.jQuery': 'jquery'
		}),
		new SWPrecacheWebpackPlugin({
			cacheId: 'VictoriaNahorna' + Math.random(),
			filename: 'service-worker.js',
			staticFileGlobs: ['build/**.*'],
			minify: false,
			stripPrefix: 'build/'
		})
	]
}