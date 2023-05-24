const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

// const port = 3070;
const app = express();

/* app.all('*', function (req, res, next) {
  console.log(req.url);
  res.header('Access-Control-Allow-Origin', req.headers.origin); //访问的主机名称
  //为true的时候，前端必须传送cookie
  res.header('Access-Control-Allow-Credentials', 'true'); //是否支持cookie跨域
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS'); //允许以下方法进行跨域请求
  next();
}); */

app.use(
  '/api',
  createProxyMiddleware({
    target: 'http://172.16.2.65:3070',
    changeOrigin: true,
    // pathRewrite: {
    //   '^/api': '',
    // },
  })
);

// app.listen(port);
