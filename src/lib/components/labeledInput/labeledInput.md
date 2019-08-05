```js
initialState = {
  value: '',
};

function updateValue(name, value) {
  setState({ [name]: value });
}

<LabeledInput
  name="testing"
  value={state.value}
  onChangeFunction={updateValue}
  label="Placeholder input"
/>;
```

```js
initialState = {
  value: '',
};

function updateValue(name, value) {
  setState({ [name]: value });
}

<LabeledInput
  name="required"
  value={state.value}
  onChangeFunction={updateValue}
  label="Required input"
  required
  theme="purple"
/>;
```

```js
initialState = {
  value: '',
};

function updateValue(name, value) {
  setState({ [name]: value });
}

<LabeledInput
  name="error"
  value={state.value}
  onChangeFunction={updateValue}
  label="With error"
  error="Required input"
/>;
```
