const test = {
    isDev: false,
    setHotModule: function () {
        if(this.isDev) {
            return [
                'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true',
                './app/app.js'
            ]
        }
        return './app/app.js'
    },
    setInline: function () {
        if(this.isDev) {
            return true;
        }
    }
};

export default test;