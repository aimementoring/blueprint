import React from 'react';
import renderer from 'react-test-renderer';
import Loading from './loading';

describe('Loading false', () => {
  it('renders properly', () => {
    const tree = renderer.create(<Loading loading={false} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Loading true', () => {
  it('renders properly', () => {
    const tree = renderer.create(<Loading loading={true} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
