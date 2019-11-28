import { configure, addDecorator, addParameters } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

configure(require.context('../src/lib/components', true, /\.stories\.js$/), module);
addDecorator(withInfo);
addDecorator(withA11y);
addDecorator(withKnobs);
addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
});
