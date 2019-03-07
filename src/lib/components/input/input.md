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
import React from 'react';
import Dropdown from 'react-select';
import { validateEmail } from '../../utils/validation';

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
