```js
initialState = {
  checkbox: true,
};

function updateValue(name, value) {
  setState({ [name]: value });
}

<Checkbox
  elementClassName="classname"
  onChangeFunction={updateValue}
  placeholder="Accept terms and conditions"
  name="checkbox"
  customId="checkbox"
  value={state.checkbox}
/>;
```
