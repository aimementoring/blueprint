module.exports = {
  title: 'AIME Portal Style Guide',
  components: 'src/lib/**/*.js',
  ignore: ['**/*.spec.js', '**/*.test.js', '**/index.js'],
  template: {
    favicon: 'public/favicon.ico',
  },
  webpackConfig: require('./config/webpack.config.js'),
  dangerouslyUpdateWebpackConfig(webpackConfig, env) {
    webpackConfig.output = {
      ...webpackConfig.output,
      publicPath: process.env.PUBLIC_URL || '',
    };
    return webpackConfig;
  },
};
