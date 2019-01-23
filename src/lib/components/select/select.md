```js
<Select placeholder="Select an option" name="select" onChangeFunction={value => {}} required>
  <option value="" disabled>
    Select an option
  </option>
  {['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'].map(value => (
    <option key={`value-${value}`}>{value}</option>
  ))}
</Select>
```
