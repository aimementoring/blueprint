```js
import { getFormattedMobilePhone } from '../../utils/validation/validation';

initialState = {
  value: '',
  formatted: null,
};

function updateValue(name, value) {
  const formatted = getFormattedMobilePhone(value, 'AU');
  setState({
    [name]: value,
    formatted,
  });
  console.log({ value, name, formatted });
}

<div>
  <PhoneInput placeholder="Enter phone number" value={state.value} onChangeFunction={updateValue} />
  {state.formatted && (
    <div style={{ display: 'block' }}>
      <div>Country: {state.formatted.country}</div>
      <div>Country calling code: {state.formatted.countryCallingCode}</div>
      <div>National number: {state.formatted.nationalNumber}</div>
      <div>Number: {state.formatted.number}</div>
      <div>Type: {state.formatted.getType()}</div>
      <div>Valid: {state.formatted.isValid() ? 'true' : 'false'}</div>
      <div>Possible: {state.formatted.isPossible() ? 'true' : 'false'}</div>
    </div>
  )}
</div>;
```
