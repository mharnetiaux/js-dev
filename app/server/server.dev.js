import path from 'path';
import express from 'express';
import exphbs  from 'express-handlebars';
import webpack from 'webpack';
import webpack_dev_middleware from 'webpack-dev-middleware';
import webpack_hot_middleware from 'webpack-hot-middleware';
import config from '../../webpack.config.babel';

const app = express(),
      isDevelopment = process.Node_ENV !== 'production',
      port = process.env.PORT || '3000',
      compiler = webpack(config),
      middleware = webpack_dev_middleware(compiler,{
          contentBase:path.resolve(__dirname, './dist'),
          historyApiFallback: true,
          compress: true,
          hot: true,
          open: true,
          port: 3000,
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

      }),
      hot_middleware = webpack_hot_middleware(compiler);

app.set('view engine', 'hbs', 'views');
app.set('views','./app/server/views');
app.engine('hbs',exphbs({
    defaultLayout:false
}));
app.use(express.static(config.output.path),middleware);
app.use(hot_middleware);

app.get('/',(req,res)=>{
    "use strict";
    res.render('main',
        {
            isDevelopment:isDevelopment
        }
    );
});

app.listen(port);