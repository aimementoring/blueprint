```js
initialState = {
  value: ""
};

function updateValue(name, value) {
  setState({ [name]: value });
}

<LabeledTextarea
  name="value"
  value={state.value}
  onChangeFunction={updateValue}
  label="Placeholder for textarea input"
/>;
```

```js
initialState = {
  value: ""
};

function updateValue(name, value) {
  setState({ [name]: value });
}

<LabeledTextarea
  name="value"
  value={state.value}
  onChangeFunction={updateValue}
  label="Placeholder input"
  helperText="My super helper textarea text"
/>;
```

```js
initialState = {
  required: ""
};

function updateValue(name, value) {
  setState({ [name]: value });
}

<LabeledTextarea
  name="required"
  value={state.required}
  onChangeFunction={updateValue}
  label="Required input"
  required
/>;
```

```js
initialState = {
  error: ""
};

function updateValue(name, value) {
  setState({ [name]: value });
}

<LabeledTextarea
  name="error"
  value={state.error}
  onChangeFunction={updateValue}
  label="With error"
  error="Required input"
/>;
```
