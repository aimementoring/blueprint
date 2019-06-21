```js
initialState = {
  textbox1: '',
};

function updateValue(name, value) {
  setState({ [name]: value });
}

<TextBox
  placeholder="Write area"
  name="textbox1"
  required
  className="myClass"
  onChangeFunction={updateValue}
  value={state.textbox1}
/>;
```

```js
initialState = {
  textbox2: '',
};

function updateValue(name, value) {
  setState({ [name]: value });
}

<TextBox
  placeholder="Write area light theme"
  name="textbox2"
  required
  theme="light"
  onChangeFunction={updateValue}
  value={state.textbox2}
/>;
```
