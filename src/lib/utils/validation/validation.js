// Documentation about memoize
// https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#what-about-memoization
import memoize from 'memoize-one';
import moment from 'moment';

const regularExpressions = {
  // eslint-disable-next-line no-useless-escape
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  phone: /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/,
  alphanumeric: /^[a-zA-Z0-9_ ]*$/,
  numeric: /^\d+$/,
};

const valueIsEmpty = (value) => (
  value === '' || value === undefined || value === null
);

export const required = value =>
  !valueIsEmpty(value) && value !== false ? undefined : 'Required';

export const validateNumeric = value =>
  regularExpressions.numeric.test(value) ? undefined : 'This value should be a valid number.';

export const validateAlphanumeric = value =>
  valueIsEmpty(value) || regularExpressions.alphanumeric.test(value)
    ? undefined
    : "This value shouldn't contain special characters.";

export const validateEmail = value =>
  valueIsEmpty(value) || regularExpressions.email.test(value)
    ? undefined
    : 'This value is not a valid email';

export const validateNonNegative = value =>
  value >= 0 ? undefined : "This value shouldn't be negative";

export const validateHigherThanZero = value =>
  value > 0 ? undefined : 'This value should be higher than zero';

export const minAmount = memoize(min => value =>
  value && value < min ? `This value should not be less than ${min}` : undefined,
);

export const maxAmount = memoize(max => value =>
  value && value > max ? `This value should not be more than ${max}` : undefined,
);

export const maxCharacters = memoize(max => value =>
  value && value.length > max ? `This value should contain maximum ${max} characters` : undefined,
);

export const minCharacters = memoize(min => value =>
  value && value.length < min ? `This value should contain minimum ${min} characters` : undefined,
);

export const validDate = value => {
  // we can do this with moment if we want to check an specific format
  // moment(value, 'YYYY-MM-DD', true).isValid()
  if (typeof value === 'string' && isNaN(value[value.length - 1])) {
    return 'This should be a valid date (for example: YYYY-MM-DD)';
  }
  return (valueIsEmpty(value) || !isNaN(Date.parse(value))
    || moment(value, 'DD-MM-YYYY', true).isValid()
    || moment(value, 'DD/MM/YYYY', true).isValid()
    || moment(value, 'DD/MM/YY', true).isValid()
    || moment(value, 'DD-MM-YY', true).isValid())
    ? undefined
    : 'This should be a valid date (for example: YYYY-MM-DD)';
}

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
      const validationMessage = checkValidations(componentSelected.validations, props[inputField]);

      if (validationMessage) {
        componentSelected.errorMessage = validationMessage;
        hasError = true;
      }
    }
  }
  return { hasError, componentsObject };
};
