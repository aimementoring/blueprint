```js
initialState = {
  value: 'Hey! I am an input',
};

function updateValue(name, value) {
  setState({ [name]: value });
}

<Input
  placeholder="Name"
  value={state.value}
  required={true}
  name="value"
/>;
```

```jsx inside Markdown
import React from 'react';
import { validateEmail } from '../../utils/validation';

initialState = {
  value: 'You need to enter an email here!',
};

function updateValue(name, value) {
  setState({ [name]: value });
}

<Input
  placeholder="Email"
  value={state.value}
  required={true}
  name="value"
  onChangeFunction={updateValue}
  validations={[validateEmail]}
/>;
```

```js
initialState = {
  value: 'Hey! I am a light themed input.',
};

function updateValue(name, value) {
  setState({ [name]: value });
}

<Input
  placeholder="Light theme"
  value={state.value}
  required={true}
  name="value"
  onChangeFunction={updateValue}
  theme="light"
/>;
```

```js
<Input
  value="I am read only. Don't try to change me!"
  name="value"
  readOnly
/>
```
