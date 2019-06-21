module.exports = {
  title: 'AIME Portal Style Guide',
  template: {
    favicon: 'https://d2ylaz7bdw65jx.cloudfront.net/assets/images/favicon/favicon.ico',
  },
  // Customisable attributes: https://github.com/styleguidist/react-styleguidist/blob/master/src/client/styles/theme.js
  theme: {
    color: {
      sidebarBackground: '#a863ff',
      base: '#da0dff',
      link: '#fff',
      linkHover: '#da0dff',
    },
    fontFamily: {
      base: '"Poppins Bold Italic", Helvetica, Arial, sans-serif',
    },
  },
  // styles: {
  //   Logo: {
  //     // We're changing the LogoRenderer component
  //     logo: {
  //       // We're changing the rsg--logo-XX class name inside the component
  //       animation: 'blink ease-in-out 300ms infinite',
  //     },
  //     '@keyframes blink': {
  //       to: { opacity: 0 },
  //     },
  //   },
  // },
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
