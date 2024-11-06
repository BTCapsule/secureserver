const express = require('express');
const cors = require('cors');
const secureServer = require('./secureserver');
const app = secureServer.app;
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');


/*

//USE THIS TO PROXY A PREBUILT APPS

app.use('/', createProxyMiddleware({
    target: 'http://localhost:4173', // iris-messenger local address
    changeOrigin: true,
    ws: true, // Enable WebSocket proxy
    secure: false, 
logLevel: 'silent',
    onProxyReq: (proxyReq) => {
        // Set mobile user agent
        proxyReq.setHeader('User-Agent', 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1');
    }
}));


*/


secureServer.start();
