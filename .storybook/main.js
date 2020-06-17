module.exports = {
  webpackFinal: (config) => {
    // const fileLoaderRule = config.module.rules.find(rule => 'test.svg'.match(rule.test));
    // fileLoaderRule.exclude = /\.svg$/;
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader'],
    });
    return config;
  },
  addons: ['@storybook/addon-docs', 'storybook-addon-react-live-edit/dist/register'],
};
