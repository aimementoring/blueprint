```js
initialState = {
  value: 'Hey! I am an input',
};

function updateValue(name, value) {
  setState({ [name]: value });
}

<OldInput
  placeholder="Name"
  value={state.value}
  required={true}
  name="value"
  theme="rainbow"
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

<OldInput
  placeholder="Email"
  value={state.value}
  required={true}
  name="value"
  onChangeFunction={updateValue}
  validations={[validateEmail]}
  theme="rainbow"
/>;
```

```js
initialState = {
  value: 'Hey! I am a light themed input.',
};

function updateValue(name, value) {
  setState({ [name]: value });
}

<OldInput
  placeholder="Light theme"
  value={state.value}
  required={true}
  name="value"
  onChangeFunction={updateValue}
  theme="rainbow"
/>;
```

```js
<OldInput
  value="I am read only. Don't try to change me!"
  name="value"
  readOnly
  theme="rainbow"
/>
```
