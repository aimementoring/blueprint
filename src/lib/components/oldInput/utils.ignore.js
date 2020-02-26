export const handleInputChange = (event, name, handleValidations, onChangeFunction) => {
  const target = event.target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  const isWrongValidation = handleValidations(value);
  onChangeFunction(name, value, isWrongValidation);
};
