const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

function resolve(dir) {
    return path.join(__dirname, './', dir)
}

module.exports = {
    context: resolve('.'),
    entry: {
        app: './src/index.js'
    },
    output: {
        path: resolve('dist'),
        filename: '[name].js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src'),
        }
    },
    module: {
        rules: [
            {test: /\.vue$/, loader: 'vue-loader'},
            {test: /\.js$/, loader: 'babel-loader', include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]},
            {test: /\.(png|jep?g|gif|svg)(\?.*)?$/, loader: 'url-loader', options: {limit: 10000, name: '/img/[name].[hash:7].[ext]'}},
            {test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/, loader: 'url-loader', options: {limit: 10000, name: '/media/[name].[hash:7].[ext]'}},
            {test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/, loader: 'url-loader', options: {limit: 10000, name: '/font/[name].[hash:7].[ext]'}},
            {test: /\.css$/, use: ['vue-style-loader', 'css-loader']}
        ]
    },
    node: {
        setImmediate: false,
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: resolve('./dist/index.html'),
            template: 'index.html',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            }
        }),
        new VueLoaderPlugin()
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 8080,
        host: '0.0.0.0',
        disableHostCheck: true
    }
}
