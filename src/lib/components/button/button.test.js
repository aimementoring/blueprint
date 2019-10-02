import React from 'react';
import renderer from 'react-test-renderer';
import Button from './button';

describe('Button', () => {
  it('is backwards compatible (using text prop instead of children)', () => {
    const tree = renderer
      .create(<Button type="button" onClickFunction={() => {}} text="Back" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders button properly', () => {
    const tree = renderer
      .create(
        <Button type="button" onClickFunction={() => {}}>
          Back
        </Button>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders link properly', () => {
    const tree = renderer
      .create(
        <Button type="link" url="www.aimementoring.com">
          Link button
        </Button>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders button properly with underneath label', () => {
    const tree = renderer
      .create(
        <Button type="link" underneathLabel="My label">
          Button
        </Button>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
