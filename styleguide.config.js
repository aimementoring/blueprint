module.exports = {
  title: 'AIME Portal Style Guide',
  components: 'src/lib/**/*.js',
  ignore: ['**/*.spec.js', '**/*.test.js', '**/index.js'],
  webpackConfig: require('./config/webpack.config.js'),
  template: {
    favicon: 'public/favicon.ico',
  },
};
