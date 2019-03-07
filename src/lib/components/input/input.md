```js
const value = 'abcd';

function updateValue(name, value) {
  setState({ [name]: value });  
}

<Input
  placeholder="Name"
  value={value}
  type="text"
  required={true}
  name="value"
  onChangeFunction={updateValue}
/>;
```

```jsx inside Markdown
const validations = require('../../utils/validation');
const validateEmail = validations.validateEmail;

initialState = {
  value: 'asdas',
}

function updateValue(name, value) {
  setState({ [name]: value });  
}

<Input
  placeholder="Name"
  value={value}
  type="text"
  required={true}
  name="value"
  onChangeFunction={updateValue}
  validations={[validateEmail]}
/>;
```
