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

```js
initialState = {
  groupValue: [],
};

function updateValue(name, value) {
  setState({ [name]: value });
}

const selectOptions = [
  {
    label: 'Group 1!',
    options: [
      { value: 'Option 1', label: 'Option 1', group: 'Group 1' },
      { value: 'Option 2', label: 'Option 2', group: 'Group 1' },
      { value: 'Option 3', label: 'Option 3', group: 'Group 1' },
    ],
    value: '',
  },
  {
    label: 'Group 2!',
    options: [
      { value: 'Option 4', label: 'Option 4', group: 'Group 2' },
      { value: 'Option 5', label: 'Option 5', group: 'Group 2' },
      { value: 'Option 6', label: 'Option 6', group: 'Group 2' },
    ],
    value: '',
  },
  {
    label: 'Group 3!',
    options: [
      { value: 'Option 7', label: 'Option 7', group: 'Group 3' },
      { value: 'Option 8', label: 'Option 8', group: 'Group 3' },
      { value: 'Option 9', label: 'Option 9', group: 'Group 3' },
    ],
    value: '',
  },
];

<Select
  isMulti
  withGroups
  placeholder="Country?"
  name="groupValue"
  onChangeFunction={updateValue}
  value={state.groupValue}
  backgroundColor="transparent"
  borderColor="transparent"
  color="#DA0DFF"
  options={selectOptions}
  styles={{
    control: {
      background: 'transparent',
    },
    input: {
      color: '#DA0DFF',
    },
    singleValue: {
      color: '#DA0DFF',
      position: 'initial',
      overflow: 'inherit',
      top: 'inherit',
      transform: 'inherit',
      maxWidth: 'inherit',
    },
    menu: {
      borderRadius: 0,
      marginTop: 0,
      width: '100%',
      color: '#DA0DFF',
      zIndex: 10000,
    },
    menuList: {
      zIndex: 10000,
      padding: 0,
    },
  }}
/>;
```
