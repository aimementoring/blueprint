# How to use Validations

## Easy example
Let see an example if you want to use the validations in your project with an Input component:

```jsx static
import { Components, Utils } from 'aime-blueprint';
const {
  required,
  maxCharacters,
} = Utils.Validation;

// .... code
// .... more code
// .... Render Method
  <Components.Input
    containerClassName={styles.inputWrapper}
    value={firstName}
    placeholder="First Name"
    onChangeFunction={this.updateForm}
    name="firstName"
    validations={[maxCharacters(300), required('Complete First Name')]}
    hasErrorAfterSubmit={hasErrorAfterSubmit}
    autoFocus
  />
```

In this case I am using the validation `maxCharacters` with a maximum of 300 characterers and a `required` with a custom message: `Complete First Name`.
If I don't send a custom message (like just `required()` in this example) in that case I would just have the default message for this kind of validation (required one).

## Validation after click on the submit button
Sometimes you need to  validate the fields twice. When the user is typing into the field and when the user click the submit button. For that case you have to force all the validations of the fields of your form after the submit event. 

For that case you should take into account the next example:

```jsx static
import { Components, Utils } from 'aime-blueprint';
const {
  required,
  maxCharacters,
  validateEmail,
  validateComponents,
} = Utils.Validation;

this.state = {
  universityEmail: '',
  firstName: '',
  hasErrorAfterSubmit: false,
}

this.validationObject = {
  firstName: {
    validations: [maxCharacters(300), required()],
  },
  universityEmail: {
    validations: [maxCharacters(300), validateEmail()],
  }
}

submit = () => {
  const validateObject = validateComponents(this.validationsObject, this.state);
  if (validateObject.hasError) {
    this.setState({ hasErrorAfterSubmit: true })
    return;
  }
  submitData(this.state);
}
// .... code
// .... more code
// .... Render Method
  <Components.Input
    containerClassName={styles.inputWrapper}
    value={firstName}
    placeholder="First Name"
    onChangeFunction={this.updateState}
    name="firstName"
    validations={this.validationObject.firstName.validations}
    hasErrorAfterSubmit={hasErrorAfterSubmit}
    autoFocus
  />
  <Input
    containerClassName={styles.inputWrapper}
    value={universityEmail}
    placeholder="University/College email"
    onChangeFunction={this.updateState}
    name="universityEmail"
    type="email"
    validations={this.validationObject.universityEmail.validations}
    hasErrorAfterSubmit={hasErrorAfterSubmit}
  />
  <button onClick={this.submit}
```
Take into account that in this case we use an object `validationObject` where we save every field with the name of the key as the name of the component. After that, when the user submit the data we re-evaluate all the fields calling to `validateComponents` where we send the object with the validations we need to make and another object (in this case the state) with the values of the fields (this was made like that because usually we have all the values of the fields in the state or in the props of the components).

If the validations after the submition failed, we set in the state a variable `hasErrorAfterSubmit` to true and we send that as parameter to one of our component. In this case you are forcing every component to be validated (without having to type in the fields).

## Types of Validations

The validations available are:

- required
- requiredIf
- validateNumeric
- validateAlphanumeric
- validateEmail
- validateInclusionIn
- validateNonNegative
- validateHigherThanZero
- minAmount
- maxAmount
- maxCharacters
- minCharacters
- validDate

The min and max validation receive as param the min or max value that you want to evaluate. For example, maxCharacters(300) receive the number 300 to know that this is the maximum amount of characters. 
All validation receive the custom message (if they have another param, it would be the second) and this is optional.

## The validations object
This object should have the `validations` field and it could have another field call `condition` for every field we want to validate. 
The field `condition` is used to check if you want to execute that validation or not after the user click on the submit button. 
In the previous example, let's suppose that you have another input that is `amount` and you just want to validate this Input when your variable `count` is less than 4. Let me show you:

```jsx static
let count = 0
this.validationObject = {
  firstName: {
    validations: [maxCharacters(300), required()],
  },
  universityEmail: {
    validations: [maxCharacters(300), validateEmail()],
  }
  amount: {
    validations: [maxCharacters(300), required('Complete First Name')],
    condition: () => { count < 4 },
  }
}
// ... code
count++
// ... more code
  <Input
    containerClassName={styles.inputWrapper}
    value={amount}
    placeholder="Amount"
    onChangeFunction={this.updateForm}
    name="amount"
    validations={this.validationObject.amount.condition() 
      ? this.validationObject.amount.validations
      : []}
    hasErrorAfterSubmit={hasErrorAfterSubmit}
    autoFocus
  />  
```

In this case you will just validate the Input component when the variable count is less than 4. Take into account that condition should be a function. So when the user click on submit button and it calls the validateComponents function it will only execute this validation if the count is less than 4 (the function of condition in the validationObject is true).

```jsx static
submit = () => {
  const validateObject = validateComponents(this.validationsObject, this.state);
  if (validateObject.hasError) {
    this.setState({ hasErrorAfterSubmit: true })
    return;
  }
  submitData(this.state);
}
```
