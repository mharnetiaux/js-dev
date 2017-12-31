import express from 'express';
import exphbs  from 'express-handlebars';
import webpack from 'webpack';
import webpack_dev_middleware from 'webpack-dev-middleware';
import webpack_hot_middleware from 'webpack-hot-middleware';
import config from '../webpack.config.babel';
import options from '../webpack/options.js';

const app = express(),
      port = options.port,
      compiler = webpack(config),
      middleware = webpack_dev_middleware(compiler, options),
      hot_middleware = webpack_hot_middleware(compiler);

app.set('view engine', 'hbs', 'views');

app.set('views','./server/views');

app.engine('hbs', exphbs());

app.use(express.static(config.output.path), middleware);

app.use(hot_middleware);

app.get('/',(req, res) => {
    "use strict";
    res.render('main');
});

app.listen(port);