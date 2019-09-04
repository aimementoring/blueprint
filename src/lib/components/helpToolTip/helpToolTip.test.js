import React from 'react';
import renderer from 'react-test-renderer';
import HelpToolTip from './helpToolTip.js';

describe('HelpToolTip', () => {
  it('renders with children', () => {
    const tree = renderer
      .create(
        <HelpToolTip>
          <h2>A headline</h2>
          <p>Some children with content</p>
        </HelpToolTip>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('uses placement and trigger argument', () => {
    const tree = renderer
      .create(
        <HelpToolTip placement="bottom" trigger="click" />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('uses theme', () => {
    const tree = renderer
      .create(<HelpToolTip theme="purple" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
