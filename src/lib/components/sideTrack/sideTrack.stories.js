import React from 'react';
import { select } from '@storybook/addon-knobs';
import SideTrack from './sideTrack';
import themeOptions from '../../styles/themeOptions';

const positionOptions = {
  left: 'left',
  right: 'right',
  down: 'down',
  up: 'up',
};

export default {
  title: 'SideTrack',
  component: SideTrack,
  parameters: {
    jest: ['sideTrack.test.js'],
  },
};

export const LeftSideTrack = () => {
  const emoji = (
    <span role="img" aria-label={`point ${select('position', positionOptions, 'left')}`}>
      👈🏿
    </span>
  );
  return (
    <div
      style={{
        position: 'relative',
        minHeight: '280px',
        padding: '30px',
      }}
    >
      <SideTrack
        title="Hey! Want to do more than just mentoring? Want to lead a mentoring program?"
        emoji={emoji}
        position={select('position', positionOptions, 'left')}
        emojiPosition={select('emojiPosition', positionOptions, 'left')}
        theme={select('theme', themeOptions, 'plain')}
      >
        <p>
          <span>
            If you think you have what it takes to lead a mentoring movement in your community, you
            should{' '}
            <a>
              <strong>check out</strong>
            </a>{' '}
            what it means to be a <strong>Hooded Scholar</strong>
          </span>
        </p>
      </SideTrack>
    </div>
  );
};

export const DownSideTrack = () => {
  const emoji = (
    <span role="img" aria-label="point down">
      👇🏿
    </span>
  );
  return (
    <div
      style={{
        position: 'relative',
        minHeight: '280px',
        padding: '30px',
      }}
    >
      <SideTrack
        title="Hey! Want to do more than just mentoring? Want to lead a mentoring program?"
        emoji={emoji}
        position={select('position', positionOptions, 'right')}
        emojiPosition={select('emojiPosition', positionOptions, 'bottom')}
        theme={select('theme', themeOptions, 'plain')}
      >
        <p>
          <span>
            Light theme....{' '}
            <a>
              <strong>Light theme</strong>
            </a>{' '}
            light theme <strong>Light theme</strong>
          </span>
        </p>
      </SideTrack>
    </div>
  );
};
