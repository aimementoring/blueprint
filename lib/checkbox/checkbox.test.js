import React from 'react';
import renderer from 'react-test-renderer';
import Checkbox from './checkbox';
describe('Checkbox', function () {
  it('renders properly', function () {
    var tree = renderer.create(React.createElement(Checkbox, {
      elementClassName: "classname",
      handleFieldChange: function handleFieldChange() {},
      labeltext: "Accept terms and conditions",
      name: "checkbox",
      customId: "checkbox",
      value: true
    })).toJSON();
    expect(tree).toMatchSnapshot();
  });
});