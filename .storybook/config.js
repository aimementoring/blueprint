import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

configure(require.context('../src/lib/components', true, /\.stories\.js$/), module);
addDecorator(withInfo);
