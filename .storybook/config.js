import {
  configure,
  addDecorator,
  addParameters,
  setAddon,
} from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import LiveEdit, { setOptions } from 'storybook-addon-react-live-edit';
import { withTests } from '@storybook/addon-jest';
import results from '../.jest-test-results.json';

setOptions({ theme: 'dracula', presets: ['react'] });

setAddon(LiveEdit);

addDecorator(withKnobs);
configure(
  require.context('../src/lib/components', true, /\.stories\.js$/),
  module,
);
addDecorator(withTests({ results }));
addDecorator(
  withInfo({
    inline: true,
    header: true,
  }),
);
addDecorator(withA11y);
addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
});
