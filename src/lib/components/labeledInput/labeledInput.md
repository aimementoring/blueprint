```js
initialState = {
  value: '',
};

function updateValue(name, value) {
  setState({ [name]: value });
}

<LabeledInput
  name="value"
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
  name="value"
  value={state.value}
  onChangeFunction={updateValue}
  label="Placeholder input"
  helperText="My super helper text"
/>;
```

```js
initialState = {
  required: '',
};

function updateValue(name, value) {
  setState({ [name]: value });
}

<LabeledInput
  name="required"
  value={state.required}
  onChangeFunction={updateValue}
  label="Required input"
  required
  theme="purple"
/>;
```

```js
initialState = {
  error: '',
};

function updateValue(name, value) {
  setState({ [name]: value });
}

<LabeledInput
  name="error"
  value={state.error}
  onChangeFunction={updateValue}
  label="With error"
  error="Required input"
/>;
```