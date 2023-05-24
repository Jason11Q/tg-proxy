const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const port = 17901;
const app = express();

// 页面内接口请求转发
app.use(
  '/api',
  createProxyMiddleware({
    target: 'http://172.16.2.65:3070',
    changeOrigin: true,
  })
);

// 正常内容页请求原启动页面
app.use(
  '*',
  createProxyMiddleware({
    target: 'http://127.0.0.1:59186/tgserver-test',
    changeOrigin: true,
  })
);

app.listen(port);
