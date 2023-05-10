const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const port = 3000;
const app = express();

app.use(
  '/',
  createProxyMiddleware({
    target: 'http://localhost:16904',
    changeOrigin: true,
    onProxyReq(proxyReq,req,res){
        proxyReq.setHeader('referer','http://172.16.2.65:3070/')
    }
  })
);



app.listen(port);
