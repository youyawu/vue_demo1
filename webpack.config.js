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
        a: './src/index.ts',
        // b: './src/main.ts',
    },
    output: {
        path: __dirname + '/public',
        filename: '[name].js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.json', '.vue', '.ts', '.tsx'],
        alias: {
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
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
                //     use: ['sass-loader', 'css-hot-loader', miniCssPlugin.loader, 'css-loader'],
                //    use: [{
                //     loader: 'style-loader'
                // }, {
                //     loader: 'css-loader'
                // }, {
                //     loader: 'sass-loader'
                // }]
            },
            {
                test: /\.css$/,
                use: ['css-hot-loader', miniCssPlugin.loader, 'css-loader'],
                //        use: ['style-loader', 'css-loader'],
                // include: [
                //     /src/,//表示在src目录下的css需要编译
                //     '/node_modules/element-ui/lib/'   //增加此项
                //   ],

            },


            {
                test: /\.(woff|ttf)$/,
                use: 'file-loader',
                // exclude: /(node_modules)/
            }
            , {
                test: /\.ts$/,
                // use:'ts-loader',
                use: [
                    "babel-loader",
                    {
                        loader: "ts-loader",
                        options: { appendTsSuffixTo: [/\.vue$/] }
                    }
                ]
            }
        ]
    },
    plugins: [
         new cleanWebpackPlugin(),
          new htmlWebpackPlugin({
            title:'myPage',
             template:'./index.html'
            // templateContent:'div'
          
        }),
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
            filename: "mystyle.css",
            chunkFilename: "[id].css"
        })
    ],
    devServer: {
        //   contentBase: './public',
        port: config.dev.port,
        inline: true,
        hot: true,
        overlay: true,
        quiet: true,
        historyApiFallback: true,
    }
}