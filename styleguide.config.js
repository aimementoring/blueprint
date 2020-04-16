module.exports = {
  title: 'AIME Blueprint',
  template: {
    favicon:
      'https://d2ylaz7bdw65jx.cloudfront.net/assets/images/favicon/favicon.ico',
  },
  // Customisable attributes: https://github.com/styleguidist/react-styleguidist/blob/master/src/client/styles/theme.js
  theme: {
    borderRadius: '3px',
    color: {
      border: '#939393',
      baseBackground: '#ffffff',
      sidebarBackground: '#516bf0',
      link: '#fff',
      name: '#09CD7B', // green
      type: '#E82A9E', // violet
      linkHover: '#9135F0', // purple
      light: '#6d6d6d',
      lightest: '#9135F0',
    },
    fontFamily: {
      base: `"GT Pressura Mono", "Univers Light", "Helvetica Neue", Helvetica, Arial, sans-serif`,
    },
  },
  styles: {
    Logo: {
      logo: {
        fontFamily: `"Luna Emu", "Poppins Black", "Arial Black", "sans serif"`,
        fontSize: '2.5em',
      },
    },
  },
  // Temporary reminder for Lara - this is where you can change the framework styles
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
      name: 'UI Components',
      description: 'UI components for our React projects',
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
      description: 'Utility functions',
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
