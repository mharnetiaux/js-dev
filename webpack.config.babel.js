import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';

// Move out
function entryDev(bool) {

    if(bool) {
        return [
            'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true',
            './app/app.js'
        ]
    }else {
        return ['./app/app.js']
    }

}

// Move out
function toggleOn(bool) {
    if(bool) {
        return true;
    }
}


const config = {
    entry: entryDev(true),
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
                use: [
                    { loader: 'babel-loader' }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.(scss)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                }),
                exclude: /node_modules/
            },
            {
                test: /\.(less)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'less-loader']
                }),
                exclude: /node_modules/
            },
            {
                test: /\.(hbs)$/,
                use: [{loader:'handlebars-loader'}],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'styles/[name].bundle.css',
            disable: toggleOn(true)
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