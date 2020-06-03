// Documentation about memoize
// https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#what-about-memoization
import memoize from 'memoize-one';
import moment from 'moment';
import { parsePhoneNumberFromString } from 'libphonenumber-js/max';

const regularExpressions = {
  // eslint-disable-next-line no-useless-escape
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  phone: /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/,
  alphanumeric: /^[a-zA-Z0-9_ ]*$/,
  numeric: /^\d+$/,
};

export const valueIsEmpty = value =>
  value === '' || value === undefined || value === null;

export const required = customMessage => value =>
  !valueIsEmpty(value) && value !== false
    ? undefined
    : customMessage || 'Required';

export const requiredIf = condition => customMessage => value =>
  condition ? required(customMessage)(value) : undefined;

export const validateNumeric = customMessage => value =>
  !value || regularExpressions.numeric.test(value)
    ? undefined
    : customMessage || 'This value should be a valid number';

export const validateAlphanumeric = customMessage => value =>
  valueIsEmpty(value) || regularExpressions.alphanumeric.test(value)
    ? undefined
    : customMessage || "This value shouldn't contain special characters";

export const validateEmail = customMessage => value =>
  valueIsEmpty(value) || regularExpressions.email.test(value)
    ? undefined
    : customMessage || 'This value is not a valid email';

export const validateInclusionIn = array => customMessage => value => {
  if (!value) return undefined;
  return array.indexOf(value) !== -1
    ? undefined
    : customMessage || `Could not find "${value}" in ${array.join(', ')}`;
};

export const validateMobilePhone = customMessage => value => {
  if (valueIsEmpty(value)) return undefined;

  const phoneNumber = parsePhoneNumberFromString(value, 'AU');
  return phoneNumber && phoneNumber.isValid()
    ? undefined
    : customMessage || 'This value is not a valid phone number';
};

export const getFormattedMobilePhone = value =>
  valueIsEmpty(value) ? {} : parsePhoneNumberFromString(value, 'AU');

export const validateNonNegative = customMessage => value =>
  value >= 0 ? undefined : customMessage || "This value shouldn't be negative";

export const validateHigherThanZero = customMessage => value =>
  (!value && value !== 0) || value > 0
    ? undefined
    : customMessage || 'This value should be higher than zero';

export const minAmount = memoize((min, customMessage) => value =>
  value && value < min
    ? customMessage || `This value should not be less than ${min}`
    : undefined,
);

export const maxAmount = memoize((max, customMessage) => value =>
  value && value > max
    ? customMessage || `This value should not be more than ${max}`
    : undefined,
);

export const maxCharacters = memoize((max, customMessage) => value =>
  value && value.length > max
    ? customMessage || `This value should contain maximum ${max} characters`
    : undefined,
);

export const minCharacters = memoize((min, customMessage) => value =>
  value && value.length < min
    ? customMessage || `This value should contain minimum ${min} characters`
    : undefined,
);

export const validDate = customMessage => value => {
  if (!value) {
    return undefined;
  }
  if (typeof value === 'string' && isNaN(value[value.length - 1])) {
    return (
      customMessage || 'This should be a valid date (for example: YYYY-MM-DD)'
    );
  }
  return typeof value === 'string' &&
    (valueIsEmpty(value) ||
      !isNaN(Date.parse(value)) ||
      moment(value, 'MM-DD-YYYY', true).isValid() ||
      moment(value, 'MM/DD/YYYY', true).isValid() ||
      moment(value, 'MM/DD/YY', true).isValid() ||
      moment(value, 'MM-DD-YY', true).isValid() ||
      moment(value, 'YYYY-MM-DD', true).isValid() ||
      moment(value, 'YYYY-M-D', true).isValid() ||
      moment(value, 'YYYY-MM-D', true).isValid() ||
      moment(value, 'YYYY-M-DD', true).isValid())
    ? undefined
    : customMessage || 'This should be a valid date (for example: YYYY-MM-DD)';
};

export const checkValidations = (validations, value) => {
  let errorMessage = null;
  if (validations.length) {
    for (let i = 0; i < validations.length; i++) {
      errorMessage = validations[i](value);
      if (errorMessage) break;
    }
  }
  return errorMessage;
};

export const validateComponents = (componentsObject, props) => {
  let hasError = false;
  for (let i = 0; i < Object.keys(componentsObject).length; i++) {
    const inputField = Object.keys(componentsObject)[i];
    const componentSelected = componentsObject[inputField];
    if (!(componentSelected.condition && !componentSelected.condition())) {
      const validationMessage = checkValidations(
        componentSelected.validations,
        props[inputField],
      );

      if (validationMessage) {
        componentSelected.errorMessage = validationMessage;
        hasError = true;
      }
    }
  }
  return { hasError, componentsObject };
};
