import React from 'react';
import renderer from 'react-test-renderer';
import Section from './section.js';

describe('Section', () => {
  it('renders properly without custom properties', () => {
    const tree = renderer.create(<Section />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders properly with grow value', () => {
    const tree = renderer.create(<Section grow />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders properly with justify content', () => {
    const tree = renderer.create(<Section justifyContent="flex-end" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders properly with align items', () => {
    const tree = renderer.create(<Section alignItems="center" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders properly with all 3 params', () => {
    const tree = renderer
      .create(<Section alignItems="start" justifyContent="flex-start" grow={2} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
