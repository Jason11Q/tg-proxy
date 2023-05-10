const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const port = 16901;
const app = express();

app.use(
  '/api/sceneEditor',
  createProxyMiddleware({
    target: 'http://test.tuguan.net/api/sceneEditor',
    changeOrigin: true,
  })
);

app.listen(port);
