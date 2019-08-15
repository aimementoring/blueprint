import React from 'react';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';
import Checkbox from './checkbox';

describe('Checkbox', () => {
  it('renders properly', () => {
    const tree = renderer
      .create(
        <Checkbox
          elementClassName="classname"
          onChangeFunction={() => {}}
          placeholder="Accept terms and conditions"
          name="checkbox"
          customId="checkbox"
          value={true}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders properly when value is invalid', () => {
    const tree = renderer
      .create(
        <Checkbox
          elementClassName="classname"
          onChangeFunction={() => {}}
          placeholder="Accept terms and conditions"
          name="checkbox"
          customId="checkbox"
          value={true}
          isValidationOk={() => true}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('updates correctly after change', () => {
    let checkboxValue = true;

    const updateValue = (name, value) => {
      checkboxValue = value;
    };

    const wrapper = mount(
      <Checkbox
        onChangeFunction={updateValue}
        value={checkboxValue}
        name="checkboxValue"
        customId="checkboxValue"
        placeholder="Checkbox Test"
      />,
    );
    const input = wrapper.find('div[onClick]');
    expect(wrapper.props().value).toBeTruthy();
    expect(checkboxValue).toBeTruthy();
    input.simulate('click');
    expect(checkboxValue).toBeFalsy();
  });

  it('updates correctly after forcing change method call', () => {
    let checkboxValue = true;

    const updateValue = (name, value) => {
      checkboxValue = value;
    };

    const wrapper = shallow(
      <Checkbox
        onChangeFunction={updateValue}
        value={checkboxValue}
        name="checkboxValue"
        customId="checkboxValue"
        placeholder="Checkbox Test"
      />,
    );

    expect(wrapper.props().value).toBeTruthy();
    wrapper.props().onChangeFunction();
    expect(checkboxValue).toBeFalsy();
  });
});
