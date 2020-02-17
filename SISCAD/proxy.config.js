const proxy = [
    {
      context: '/api',
      target: 'https://localhost:4201',
      pathRewrite: { '^/api': '' }
    }
  ];
  module.exports = proxy;