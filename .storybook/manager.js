import { addons } from '@storybook/addons';
import '@storybook/addon-knobs/register';
import '@storybook/addon-storysource/register';
import '@storybook/addon-jest/register';
import '@storybook/addon-links/register';
import '@storybook/addon-a11y/register';
import '@storybook/addon-actions/register';

import theme from './aimeTheme';

addons.setConfig({ theme });
