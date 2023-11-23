const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/buy-via-whatsapp',
    createProxyMiddleware({
      target: 'https://wa.me',
      changeOrigin: true,
    })
  );
};
