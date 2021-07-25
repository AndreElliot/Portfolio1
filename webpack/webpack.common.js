const path = require('path')
const plugins = require('vue-loader')
const htmlPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname, './src/main.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/'
    },
    module:{
        rules:[
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test:/\.css$/,
                use:['style-loader', 'css-loader']
            },
            {
                test:/\.s(a|c)ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test:/\.(png|jpeg|jpg|svg)$/,
                type: 'asset'
            }
        ]
    },
    resolve:{
        extensions: ['.js', '.vue', '.json']
    },
    plugins:[
        new plugins.VueLoaderPlugin(),
        new htmlPlugin({
            template: '../index.html'
        })
    ]
}