```js
initialState = {
  value: '',
};

function updateValue(name, value) {
  setState({ [name]: value });
}

<Textarea
  theme="base"
  name="value"
  value={state.value}
  onChangeFunction={updateValue}
  label="Tell us more!"
/>;
```

```js
initialState = {
  story: '',
};

function updateValue(name, value) {
  setState({ [name]: value });
}

<Textarea
  theme="rainbow"
  name="story"
  value={state.story}
  onChangeFunction={updateValue}
  label="Tell us your story."
  required
  helperText="If you want, you can also tell us about your pet."
/>;
```

```js
initialState = {
  dontchangeme: 'This is just how I am.',
};

<Textarea
  name="dontchangeme"
  theme="rainbow"
  value={state.dontchangeme}
  label="You won't change me."
  readOnly
/>;
```

```js
initialState = {
  error: '',
};

function updateValue(name, value) {
  setState({ [name]: value });
}

<Textarea
  name="error"
  theme="rainbow"
  value={state.error}
  onChangeFunction={updateValue}
  label="With error"
  validationMessage="Please fill out this field."
  isValidationOk={() => true}
/>;
```
