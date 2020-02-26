```js
initialState = {
  value: ""
};

function updateValue(name, value) {
  setState({ [name]: value });
}

<Input
  name="value"
  value={state.value}
  onChangeFunction={updateValue}
  label="Placeholder input"
/>;
```

```js
initialState = {
  value: ""
};

function updateValue(name, value) {
  setState({ [name]: value });
}

<Input
  name="value"
  value={state.value}
  onChangeFunction={updateValue}
  label="Placeholder input"
  helperText="My super helper text"
/>;
```

```js
initialState = {
  required: ""
};

function updateValue(name, value) {
  setState({ [name]: value });
}

<Input
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

<Input
  name="error"
  value={state.error}
  onChangeFunction={updateValue}
  label="With error"
  error="Required input"
/>;
```

```js
<Input
  name="cant-change-me"
  value="I also work with readOnly"
  label="Can't change me"
  readOnly
/>
```
