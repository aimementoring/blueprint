import React from 'react';
import renderer from 'react-test-renderer';
import WarningBlock from './warningBlock.js';

describe('WarningBlock', () => {
  it('renders properly', () => {
    const tree = renderer
      .create(
        <WarningBlock>
          Ups! There was an error, please call your AIME key contact for more information
        </WarningBlock>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
