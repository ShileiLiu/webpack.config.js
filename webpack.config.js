//通用型webpack配置文件
//可根据需求自行修改
//webpack版本 2.1.4
let webpack = require('webpack')
let path = require('path');
let autoprefixer = require('autoprefixer');
module.exports = {
    //插件项
    plugins: [
//上线前请进行压缩，开发环境可关闭
//    new webpack.optimize.UglifyJsPlugin({
//	        compress: {
//	            warnings: false,
//	        },
//	        comments:false,
//	        sourceMap: true,
//	        mangle: true
//	    })       
    ],
    //页面入口文件配置
    entry: {
    	'Index/js/aboutUS':'./build/Index/js/aboutUS.js',       
	},
    output: { //path.join(__dirname, 'app/public/js/dest')
        //path:'E:\\DODO\\MobilHN\\static\\src',
        path: path.join(__dirname, './src/'),
        filename: '[name].min.js',
        publicPath:'../../../src'
    },
    module: {
        //加载器配置
        //不同的文件有不同的加载配置策略
        //此配置可适用Vue,React的Jsx语法，ES6/7的解析语法。Less解析，字体图标加载，图片加载
        loaders: [
        	{test:/\.vue$/,loader:'vue-loader'},
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.(js|jsx)$/, loader: 'babel-loader' },
            { 
                test: /\.less$/, 
                loader: ['style-loader','css-loader','postcss-loader','less-loader']
                
            },
            { test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=10&name=/public/images/[name].[ext]'},
            { test: /\.(ttf|eot|woff|svg)$/, loader: "url-loader?name=/public/css/font/[name].[ext]" },
        ]
    },
    //其它解决方案配置
    resolve: {
        extensions: ['.js', '.json','.vue'],
        alias: {
            PublicJS : path.join(__dirname, "./build/Public/js/"),
            PublicCSS : path.join(__dirname, "./build/Public/css/"),
            PublicLESS : path.join(__dirname, "./build/Public/css/less/"),
            PUMP : path.join(__dirname, "./build/Public/js/ump.js"),
            PHN : path.join(__dirname, "./build/Public/js/HN.js")
        }
    }
}