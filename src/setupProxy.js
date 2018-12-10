const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    proxy('/api', {
      target: 'https://webservice.juanpi.com',
      changeOrigin: true,
    }),
    proxy('/cate', {
      target: 'https://m.juanpi.com',
      changeOrigin: true,
    }),
    proxy('/keywords', {
      target: 'https://m.juanpi.com',
      changeOrigin: true,
    }),
    proxy('/gsort', {
      target: 'https://shop.juanpi.com',
      changeOrigin: true,
    }),
    proxy('/getDetail', {
      target: 'https://webservice.juanpi.com',
      changeOrigin: true,
      pathRewrite : {
        '/getDetail' : ''
      }
    }),
    proxy('/apiGetBrand', {
      target: 'http://webservice.juanpi.com',
      changeOrigin: true,
      pathRewrite : {
        '/apiGetBrand' : ''
      }
    }),
    proxy('/toSignIn', {
      target: 'http://localhost:3000',
      changeOrigin: true,
      pathRewrite : {
        '/toSignIn' : ''
      }
    }),
    proxy('/isSignIn', {
      target: 'http://localhost:3000',
      changeOrigin: true,
      pathRewrite : {
        '/isSignIn' : ''
      }
    }),
  );
};