import React from 'react';
import renderer from 'react-test-renderer';
import Button from './button';
describe('Button', function () {
  it('renders properly', function () {
    var tree = renderer.create(React.createElement(Button, {
      type: "button",
      onClickFunction: function onClickFunction() {},
      text: "Back"
    })).toJSON();
    expect(tree).toMatchSnapshot();
  });
});