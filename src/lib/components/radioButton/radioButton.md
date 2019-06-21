```js
initialState = {
  value: 'notReturningMentor',
};

function updateValue(name, value) {
  setState({ [name]: value });
}

const radioButtonsOptions = [
  {
    value: 'notReturningMentor',
    text: 'Yes this will be my first year as an AIME mentor and I can’t flippin’ wait!',
  },
  {
    value: 'returningMentor',
    text:
      'I’ve mentored with AIME before and will register with the same email I used then. I also can’t flippin’ wait!',
  },
];
<RadioButton
  className=""
  name="value"
  onChangeFunction={updateValue}
  inputName="returningMentor"
  options={radioButtonsOptions}
  value={state.value}
/>;
```
