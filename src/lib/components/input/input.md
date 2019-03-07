```js
const value = 'abcd';

<Input
  placeholder="Name"
  value={value}
  type="text"
  required={true}
  name="value"
  onChangeFunction={(attr, value) => this.updateState('input', attr, value)}
/>;
```

```js
const value = 'abcd';

<Input
  placeholder="Light theme"
  value={value}
  type="text"
  required={true}
  name="value"
  onChangeFunction={(attr, value) => this.updateState('input', attr, value)}
  theme="light"
/>;
```
