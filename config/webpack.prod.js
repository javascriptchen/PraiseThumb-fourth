const path = require("path");
const webpack = require("webpack");
const LiveReloadPlugin = require("webpack-livereload-plugin"); //监控浏览器自动更新
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Manifest = require("webpack-manifest");

module.exports = {
	entry: {
		index: [
			path.join(__dirname, "../src/public/script/index.es6"),
			path.join(__dirname, "../src/public/script/index.js")
		],
		tag: [
			path.join(__dirname, "../src/public/script/tag.es6"),
			path.join(__dirname, "../src/public/script/star.es6"),
		]
	},
	output: {
		filename: "public/scripts/[name]-[hash:5].js",
		publicPath: "http://192.168.61.100:3000/",
		path: path.join(__dirname, "../build")
	},
	module: {
		rules: [{
			test: /\.es6$/,
			exclude: /(node_modules|bower_components)/,
			use: {
				loader: "babel-loader",
				options: {
					presets: ["env"]
				}
			}
		},
		{
			test: /\.css$/,
			use: ExtractTextPlugin.extract({
				fallback: "style-loader",
				use: "css-loader"
			})
		}
		]
	},
	plugins: [
		// 删除上次编译留下的文件，看着碍眼
		new CleanWebpackPlugin(["build/public/**/*"], {
			root: path.join(__dirname, "../"), //根目录
			verbose: true, //开启在控制台输出信息
			dry: false //启用删除文件
		}),
		// 打包公用js
		new webpack.optimize.CommonsChunkPlugin({
			name: "vendor",
			filename: "public/scripts/common/vendor-[hash:5].js",
		}),
		new webpack.DefinePlugin({
			"process.env": {
				NODE_ENV: "dev"
			}
		}),
		new LiveReloadPlugin({
			appendScriptTag: true
		}), //将<LiveReload>的script自动加入<head>中
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
				drop_console: false,
			}
		}),
		new ExtractTextPlugin("public/css/[name]-[hash:5].css"),
		new OptimizeCssAssetsPlugin({
			assetNameRegExp: /\.css$/g,
			cssProcessor: require("cssnano"),
			cssProcessorOptions: {
				discardComments: {
					removeAll: true
				}
			},
			canPrint: true,
		}),
		new HtmlWebpackPlugin({
			filename: "./views/layout.html",
			template: "src/widget/layout.html",
			inject: false
		}),
		new HtmlWebpackPlugin({
			filename: "./widget/index.html",
			template: "src/widget/index.html",
			inject: false
		}),
		new HtmlWebpackPlugin({
			filename: "./views/index.html",
			template: "src/views/index.js",
			chunks: ["vendor", "index", "tag"], //传入要插入的js文件
			inject: false
		}),
		new HtmlWebpackPlugin({
			filename: "./widget/star.html",
			template: "src/widget/star.html",
			inject: false
		}),
		new HtmlWebpackPlugin({
			filename: "./views/star.html",
			template: "src/views/star.js",
			chunks: ["vendor", "index", "tag"], //传入要插入的js文件
			inject: false
		}),
		new Manifest({
			cache: [
				"../public/css/vendor-[hash:5].css"
			],
			//Add time in comments.
			timestamp: true,
			// 生成的文件名字，选填
			// The generated file name, optional.
			filename: "cache.manifest",
			// 注意*星号前面用空格隔开
			network: [
				" *",
			],
			// manifest 文件中添加注释
			// Add notes to manifest file.
			headcomment: "test",
			master: ["./views/layout.html"]
		})
	]
};