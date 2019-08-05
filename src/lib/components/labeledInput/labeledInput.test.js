import React from 'react';
import renderer from 'react-test-renderer';
import LabeledInput from './labeledInput.js';

describe('LabeledInput', () => {
  it('renders properly', () => {
    const tree = renderer
      .create(<LabeledInput name="testing" value="" label="Testing input" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders properly with required', () => {
    const tree = renderer
      .create(<LabeledInput name="testing" value="" label="Testing required input" required />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders properly with required and a value', () => {
    const tree = renderer
      .create(<LabeledInput name="testing" value="ABCD" label="Testing input" required />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders properly when it is disabled', () => {
    const tree = renderer
      .create(<LabeledInput name="testing" value="" label="Testing input" disabled />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders properly when type is number', () => {
    const tree = renderer
      .create(<LabeledInput name="testing" value="" label="Testing input" type="number" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders properly when different theme', () => {
    const tree = renderer
      .create(<LabeledInput name="testing" value="" label="Testing input" theme="purple" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders properly when it has an error', () => {
    const tree = renderer
      .create(
        <LabeledInput
          name="testing"
          value=""
          label="Testing input"
          theme="purple"
          error="It is a required field"
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders properly with helper text', () => {
    const tree = renderer
      .create(
        <LabeledInput name="testing" label="Testing input" helperText="My awesome helper text" />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders properly with error and helper text', () => {
    const tree = renderer
      .create(
        <LabeledInput
          name="testing"
          label="Testing input"
          error="There is an error"
          helperText="My awesome helper text"
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
