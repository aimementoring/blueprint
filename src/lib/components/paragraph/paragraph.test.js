import React from 'react';
import renderer from 'react-test-renderer';
import Paragraph from './title.js.js';

describe('Paragraph', () => {
  it('renders properly', () => {
    const tree = renderer.create(<Paragraph>Gradient default Paragraph</Paragraph>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('is backwards compatible (text passed as prop)', () => {
    const tree = renderer.create(<Paragraph text="Gradient default Paragraph" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
