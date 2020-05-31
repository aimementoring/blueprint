import React from 'react';
import renderer from 'react-test-renderer';
import Textarea from './textarea.js';
import { required } from '../../utils/validation/validation';

describe('Textarea', () => {
  it('renders properly', () => {
    const tree = renderer
      .create(<Textarea name="testing" value="" label="Testing input" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders properly with required', () => {
    const tree = renderer
      .create(
        <Textarea
          name="testing"
          value=""
          label="Testing required input"
          required
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders properly when it is disabled', () => {
    const tree = renderer
      .create(
        <Textarea name="testing" value="" label="Testing input" disabled />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders properly when different theme', () => {
    const tree = renderer
      .create(
        <Textarea
          name="testing"
          value=""
          label="Testing input"
          theme="purple"
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders properly with helper text', () => {
    const tree = renderer
      .create(
        <Textarea
          name="testing"
          value=""
          label="Testing input"
          helperText="My awesome helper text"
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('uses validations', () => {
    const tree = renderer
      .create(
        <Textarea
          name="testing"
          value=""
          validations={[required()]}
          hasErrorAfterSubmit
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders properly with autofocus', () => {
    const tree = renderer
      .create(<Textarea name="testing" value="" autofocus />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders properly with class name and container class name', () => {
    const tree = renderer
      .create(
        <Textarea
          name="testing"
          label="Testing input"
          value=""
          className="myClass"
          containerClassName="myClassContainer"
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
