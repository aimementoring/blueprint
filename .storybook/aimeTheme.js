// https://storybook.js.org/docs/configurations/theming/#docs-content
import { create } from '@storybook/theming/create';

export default create({
  base: 'light',

  colorPrimary: '#9135F0',
  colorSecondary: 'deepskyblue',

  // UI
  appBg: '#fff',
  appContentBg: '#fff',
  appBorderColor: '#ccc',
  appBorderRadius: 4,

  // Typography
  fontBase:
    '"GT Pressura Mono", "Univers Light", "Helvetica Neue", Helvetica, Arial, sans-serif',
  fontCode:
    '"Operator Mono","Fira Code Retina","Fira Code","FiraCode-Retina","Andale Mono","Lucida Console",Consolas,Monaco,monospace',

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

  brandTitle: 'AIME Blueprint',
  brandUrl: 'https://aimementoring.com',
  brandImage: 'https://d1muvgoqe3g8vw.cloudfront.net/blueprint/aime_logo.png',
});
