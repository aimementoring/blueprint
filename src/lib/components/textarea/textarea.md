```js
initialState = {
  textarea1: '',
};

function updateValue(name, value) {
  setState({ [name]: value });
}

<Textarea
  placeholder="Write area"
  name="textarea1"
  required
  className="myClass"
  onChangeFunction={updateValue}
  value={state.textarea1}
/>;
```

```js
initialState = {
  textarea2: '',
};

function updateValue(name, value) {
  setState({ [name]: value });
}

<Textarea
  placeholder="Write area light theme"
  name="textarea2"
  required
  theme="light"
  onChangeFunction={updateValue}
  value={state.textarea2}
/>;
```
