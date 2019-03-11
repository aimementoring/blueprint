```js
initialState = {
  singleValue: 'Option 1',
};

function updateValue(name, value) {
  setState({ [name]: value });
}

const selectOptions = [
  { value: 'Select an option', label: 'Select an option' },
  { value: 'Option 1', label: 'Option 1' },
  { value: 'Option 2', label: 'Option 2' },
  { value: 'Option 3', label: 'Option 3' },
  { value: 'Option 4', label: 'Option 4' },
  { value: 'Option 5', label: 'Option 5' },
];
<Select
  placeholder="Select an option"
  name="singleValue"
  onChangeFunction={updateValue}
  options={selectOptions}
  value={state.singleValue}
/>;
```

```js
initialState = {
  multipleValue: ['Option 1', 'Option 2'],
};

function updateValue(name, value) {
  setState({ [name]: value });
}

const selectOptions = [
  { value: 'Select an option', label: 'Select an option' },
  { value: 'Option 1', label: 'Option 1' },
  { value: 'Option 2', label: 'Option 2' },
  { value: 'Option 3', label: 'Option 3' },
  { value: 'Option 4', label: 'Option 4' },
  { value: 'Option 5', label: 'Option 5' },
];
<Select
  placeholder="Select multiple options"
  name="multipleValue"
  onChangeFunction={updateValue}
  options={selectOptions}
  value={state.multipleValue}
  searchable
  isMulti
/>;
```
