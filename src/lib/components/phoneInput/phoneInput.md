```js
import { getFormattedMobilePhone } from "../../utils/validation/validation";

initialState = {
  phone: "",
  formatted: null
};

function updateValue(name, value) {
  const formatted = getFormattedMobilePhone(value, "AU");
  setState({
    [name]: value,
    formatted
  });
}

<div>
  <PhoneInput
    placeholder="Enter phone number"
    value={state.phone}
    onChangeFunction={updateValue}
    theme="rainbow"
    defaultCountry="AU"
  />
  {state.formatted && state.phone && (
    <div style={{ display: "block" }}>
      <div>Country: {state.formatted.country}</div>
      <div>Country calling code: {state.formatted.countryCallingCode}</div>
      <div>National number: {state.formatted.nationalNumber}</div>
      <div>Number: {state.formatted.number}</div>
      <div>Type: {state.formatted.getType()}</div>
      <div>Valid: {state.formatted.isValid() ? "true" : "false"}</div>
      <div>Possible: {state.formatted.isPossible() ? "true" : "false"}</div>
    </div>
  )}
</div>;
```
