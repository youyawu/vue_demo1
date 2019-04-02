const cleanWebpackPlugin = require('clean-webpack-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')
const copyWebpackPlugin = require("copy-webpack-plugin")
const VueLoaderPlugin = require('vue-loader/lib/plugin')
 const miniCssPlugin = require("mini-css-extract-plugin")
const friendly = require('friendly-errors-webpack-plugin')
const config = require('./config')
let webpack = require('webpack')
let path = require("path")

module.exports = {
    stats: 'none',
    devtool: 'source-map',
    mode: 'development',
    entry: {
        a: './src/index.js',
        b: './src/main.js'
    },
    output: {
        path: __dirname + '/public',
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.json', '.vue'],
        alias: {
            // 'vue$': 'vue/dist/vue.esm.js'
            '@': path.resolve(__dirname, 'src')
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }, {
                test: /\.css$/,
             use: [ 'css-hot-loader',miniCssPlugin.loader, 'css-loader']
            //     use:['style-loader','css-loader' ]
              
            }, {
                test: /\.(woff|ttf)$/,
                use: 'file-loader'
            }
        ]
    },
    plugins: [
        new cleanWebpackPlugin(),
        new htmlWebpackPlugin({ template: './index.html' }),
        new webpack.HotModuleReplacementPlugin(),
        new copyWebpackPlugin(),
        new VueLoaderPlugin(),
        new friendly({
            compilationSuccessInfo: {
                messages: [`Your application is running here: http://${config.dev.host}:${config.dev.port}`],
            },

            clearConsole: true,
        }),
      new miniCssPlugin({
        //   filename:"mystyle.css",
          chunkFilename: "[id].css"
      })
    ],
    devServer: {
        // contentBase: './public',
        port: config.dev.port,
        inline: true,
        hot: true,
        overlay: true,
        quiet: true,
    }
}