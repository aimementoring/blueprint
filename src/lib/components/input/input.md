```js
initialState = {
  value: '',
};

function updateValue(name, value) {
  setState({ [name]: value });
}

<Input
  theme="base"
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

<Input
  theme="rainbow"
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

<Input
  theme="rainbow"
  name="required"
  value={state.required}
  onChangeFunction={updateValue}
  label="Required input"
  required
/>;
```

```js
initialState = {
  error: '',
};

function updateValue(name, value) {
  setState({ [name]: value });
}

<Input
  theme="base"
  name="error"
  value={state.error}
  onChangeFunction={updateValue}
  label="With error"
  error="Required input"
/>;
```

```js
<Input
  theme="rainbow"
  name="cant-change-me"
  value="I also work with readOnly"
  label="Can't change me"
  readOnly
/>
```
