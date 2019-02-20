module.exports = {
  title: 'AIME Portal Style Guide',
  template: {
    favicon: 'https://d2ylaz7bdw65jx.cloudfront.net/assets/images/favicon/favicon.ico',
  },
  webpackConfig: require('./config/webpack.config.js'),
  dangerouslyUpdateWebpackConfig(webpackConfig, env) {
    webpackConfig.output = {
      ...webpackConfig.output,
      publicPath: process.env.PUBLIC_URL || '',
    };
    return webpackConfig;
  },
  sections: [
    {
      name: 'Components',
      description: 'Visual components to be used in React websites',
      components: 'src/lib/components/**/*.js',
      ignore: [
        '**/*.spec.js',
        '**/*.test.js',
        '**/index.js',
        '**/countryCollection.js',
        '**/*.ignore.js',
      ],
    },
    {
      name: 'Utils',
      description: 'Utils functions',
      components: 'src/lib/utils/**/*.js',
      ignore: [
        '**/*.spec.js',
        '**/*.test.js',
        '**/index.js',
        'src/lib/utils/index.js',
        '**/*.ignore.js',
      ],
    },
  ],
};
