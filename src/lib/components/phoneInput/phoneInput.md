```jsx
let phone = '';

function updatePhone(name, value) {
  phone = value;
}

<PhoneInput
  currentSite="global"
  placeholder="Phone"
  name="phone"
  value={phone}
  onChangeFunction={() => {}}
  onCountrySelected={() => {}}
  required
/>;
```
