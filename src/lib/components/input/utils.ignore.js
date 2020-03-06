export const handleInputChange = (
  event,
  name,
  handleValidations,
  onChangeFunction,
) => {
  const { type, checked } = event.target;
  const value = type === 'checkbox' ? checked : event.target.value;
  const isWrongValidation = handleValidations(value);
  onChangeFunction(name, value, isWrongValidation);
};
