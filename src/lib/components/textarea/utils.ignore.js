export const handleInputChange = (
  event,
  name,
  handleValidations,
  onChangeFunction,
) => {
  const value = event.target.value;
  const isWrongValidation = handleValidations(value);
  onChangeFunction(name, value, isWrongValidation);
};
