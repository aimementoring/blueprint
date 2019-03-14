import React from 'react';
import renderer from 'react-test-renderer';
import RadioButtons from './radioButton';

describe('PhoneInput', () => {
  it('renders properly', () => {
    const radioButtonsOptions = [
      {
        value: 'notReturningMentor',
        text: 'Yes this will be my first year as an AIME mentor and I can’t flippin’ wait!',
      },
      {
        value: 'returningMentor',
        text: 'I’ve mentored with AIME before and will register with the same email I used then. I also can’t flippin’ wait!',
      },
    ];
    const tree = renderer
      .create(
        <RadioButtons
          className=""
          onChangeFunction={() => { }}
          inputName="returningMentor"
          options={radioButtonsOptions}
          value="returningMentor"
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
