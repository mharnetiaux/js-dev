import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';

const config = {
    entry: {
        app: [
            'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true',
            './app/app.js'
        ]
    },
    output: {
        path: __dirname + '/dist',
        filename: 'scripts/[name].bundle.js',
    },
    module: {
        rules: [{
                test: /\.(js)$/,
                include: [
                    path.resolve(__dirname, './app')
                ],
                exclude: path.resolve(__dirname, "./node_modules"),
                use: [
                    { loader: 'babel-loader' }
                ]
            },
            {
                test: /\.(scss)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.(less)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'less-loader']
                })
            },
            {
                test: /\.(hbs)$/,
                use: [{loader:'handlebars-loader'}]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'styles/[name].bundle.css',
            disable: false
        }),
        new HtmlWebpackPlugin({
            tile: 'Home Page Template',
            template: path.resolve(__dirname, './server/views/main.hbs'),
            inject: 'body',
            filename: 'index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    stats: {
        children: false
    }
};

export default config;