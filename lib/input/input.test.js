import React from 'react';
import renderer from 'react-test-renderer';
import Input from './input';
describe('Input', function () {
  it('renders properly', function () {
    var tree = renderer.create(React.createElement(Input, {
      placeholder: "Name",
      value: "",
      name: "name",
      type: "text",
      required: true,
      onChangeFunction: function onChangeFunction(value) {},
      disabled: "disabled"
    })).toJSON();
    expect(tree).toMatchSnapshot();
  });
});