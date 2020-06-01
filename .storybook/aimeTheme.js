// https://storybook.js.org/docs/configurations/theming/#docs-content
import { create } from '@storybook/theming/create';

export default create({
  base: 'light',

  colorPrimary: '#9135F0',
  colorSecondary: 'deepskyblue',

  // UI
  appBg: '#fff',
  appContentBg: '#fff',
  appBorderColor: 'rgb(199, 0, 255)',
  appBorderRadius: 4,

  // Typography
  fontBase:
    '"GT Pressura Mono", "Univers Light", "Helvetica Neue", Helvetica, Arial, sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: '#fff',
  barSelectedColor: '#fff',
  barBg: '#9135F0',

  // Form colors
  inputBg: '#fff',
  inputBorder: 'silver',
  inputTextColor: '#000',
  inputBorderRadius: 4,

  brandTitle: 'My custom storybook',
  brandUrl: 'https://aimementoring.com',
  brandImage: 'https://d1muvgoqe3g8vw.cloudfront.net/blueprint/aime_logo.png',
});
