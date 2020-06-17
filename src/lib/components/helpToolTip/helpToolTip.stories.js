import React from 'react';
import HelpToolTip from './helpToolTip';

export default {
  title: 'HelpToolTip',
  component: HelpToolTip,
  parameters: {
    jest: ['helpToolTip.test.js'],
  },
};

export const helpToolTipRight = () => (
  <HelpToolTip placement="right" trigger="click">
    <h3>Hello, my name is HelpTooltip!</h3>
    <div>
      <span>
        I have so many interesting and helpful things to tell you. I could even tell a joke from
        time to time!
      </span>
    </div>
  </HelpToolTip>
);

export const helpToolTipTop = () => (
  <HelpToolTip placement="top" trigger="click">
    <h3>Hello, my name is HelpTooltip!</h3>
    <div>
      <span>
        I have so many interesting and helpful things to tell you. I could even tell a joke from
        time to time!
      </span>
    </div>
  </HelpToolTip>
);

export const helpToolTipLeft = () => (
  <HelpToolTip placement="left" trigger="click">
    <h3>Hello, my name is HelpTooltip!</h3>
    <div>
      <span>
        I have so many interesting and helpful things to tell you. I could even tell a joke from
        time to time!
      </span>
    </div>
  </HelpToolTip>
);

export const helpToolTipBottom = () => (
  <HelpToolTip placement="bottom" trigger="hover">
    <h3>I am really good at placing myself!</h3>
    <div>
      <span>And you can decide where, and if I react to hover or click.</span>
    </div>
  </HelpToolTip>
);
