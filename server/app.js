import express from 'express';
import bodyParser from 'body-parser';
import timeout from 'connect-timeout';
import path from 'path';
import AV from 'leanengine';
import webpack from 'webpack';

import { RenderClientPage, RenderManagePage } from './view/view';

// 加载云函数定义，你可以将云函数拆分到多个文件方便管理，但需要在主文件中加载它们
// require('./cloud/cloud.js');

const app = express();


app.use(express.static(path.resolve(__dirname, '../build')));

// 设置默认超时时间
app.use(timeout('15s'));

// 加载云引擎中间件
app.use(AV.express());

app.enable('trust proxy');
// 需要重定向到 HTTPS 可去除下一行的注释。
// app.use(AV.Cloud.HttpsRedirect());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// 热加载热替换在开发环境下的配置
if (process.env.NODE_ENV === 'development') { // 开发模式下
  const webpackconfig = require('../webpack.config.dev.js');
  const compiler = webpack(webpackconfig);
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackconfig.output.publicPath,
    stats: {
      assets: false,
      colors: true,
      version: false,
      hash: false,
      timings: false,
      chunks: false,
      chunkModules: false,
    },
  }));
  app.use(require('webpack-hot-middleware')(compiler));
} 

// app.use('/apiclient', function(req, res, next) {
//   res.send('client');
// });

// app.use('/apimanage', function(req, res, next) {
//   res.send('manage');
// });


// app.get('/manage', function(req, res, next) {
//   res.sendFile(path.resolve(__dirname, './manage.html'));
// });

app.get('*', (req, res, next) => {
  const html = RenderClientPage(process.env.NODE_ENV);
  // res.sendFile(path.resolve(__dirname, './view/client.html'));
  res.status(200).end(html);
});

app.use((req, res, next) => {
  // 如果任何一个路由都没有返回响应，则抛出一个 404 异常给后续的异常处理器
  if (!res.headersSent) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  }
});

// error handlers
app.use((err, req, res, next) => {
  if (req.timedout && req.headers.upgrade === 'websocket') {
    // 忽略 websocket 的超时
    return;
  }

  var statusCode = err.status || 500;
  if (statusCode === 500) {
    console.error(err.stack || err);
  }
  if (req.timedout) {
    console.error('请求超时: url=%s, timeout=%d, 请确认方法执行耗时很长，或没有正确的 response 回调。', req.originalUrl, err.timeout);
  }
  res.status(statusCode);
  // 默认不输出异常详情
  var error = {};
  if (app.get('env') === 'development') {
    // 如果是开发环境，则将异常堆栈输出到页面，方便开发调试
    error = err;
  }
  res.send(err);
});

module.exports = app;
