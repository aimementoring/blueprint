import { configure, addDecorator, addParameters, setAddon } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import LiveEdit, { setOptions } from 'storybook-addon-react-live-edit';
import { withTests } from '@storybook/addon-jest';
import results from '../.jest-test-results.json';

setOptions({ theme: 'darcula', presets: ['react'] });

setAddon(LiveEdit);

configure(require.context('../src/lib/components', true, /\.stories\.js$/), module);
addDecorator(withInfo({
  inline: true,
  header: true,
}));
addDecorator(withA11y);
addDecorator(withKnobs);
addDecorator(withTests({ results }));
addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
});
