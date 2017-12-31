import path from 'path';

const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';

const options = {
    contentBase:path.resolve(__dirname, './dist'),
    historyApiFallback: true,
    compress: true,
    hot: true,
    open: true,
    port: 8080,
    inline: true,
    noInfo: false,
    overlay: {
        warnings: true,
        errors: true
    },
    stats: {
        colors: true,
        hash: false,
        timings: true,
        chunks: false,
        chunkModules: false,
        modules: false
    }
};

export default options;
