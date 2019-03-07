// Documentation about memoize
// https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#what-about-memoization
import memoize from 'memoize-one';

const regularExpressions = {
  // eslint-disable-next-line no-useless-escape
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  phone: /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/,
  alphanumeric: /^[a-zA-Z0-9_ ]*$/,
  numeric: /^\d+$/,
};

export const required = value => (value !== undefined && value !== ''
  ? undefined
  : "Required");

export const validateNumeric = value => (regularExpressions.numeric.test(value)
  ? undefined
  : "This value should be a valid number.");

export const validateAlphanumeric = value => (regularExpressions.alphanumeric.test(value)
  ? undefined
  : "This value shouldn't contain special characters.");

export const validateEmail = value => (
  regularExpressions.email.test(value) ? undefined : "This value is not a valid email"
);


export const validateNonNegative = value => (
  value >= 0 ? undefined : "This value shouldn't be negative"
);

export const validateHigherThanZero = value => (
  value > 0 ? undefined : "This value should be higher than zero"
);

export const minAmount = memoize(min => value => (value && value < min
  ? `This value should not be less than ${min}`
  : undefined),
);

export const maxAmount = memoize(max => value => (value && value > max
  ? `This value should not be more than ${max}`
  : undefined),
);

export const maxCharacters = memoize(max => value => (value && value.length > max
  ? `This value should contain maximum ${max} characters`
  : undefined),
);


export const checkValidations = (validations, value) => {
  let errorMessage = null;
  if (validations.length) {
    for (let i = 0; i < validations.length; i++) {
      errorMessage = validations[i](value);
      if (errorMessage) break;
    }
  }
  return errorMessage;
}
