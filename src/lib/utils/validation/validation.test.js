import {
  required,
  validateNumeric,
  validateAlphanumeric,
  validateEmail,
  validateNonNegative,
  validateHigherThanZero,
  minAmount,
  maxAmount,
  maxCharacters,
  minCharacters,
  validDate,
} from './index';

describe('Validation Required', () => {
  describe('It should return a message error when', () => {
    it('a field is empty string', () => {
      const value = '';
      const responseOfTheValidation = required()(value);
      expect(responseOfTheValidation).toEqual('Required');
    });
    it('a field is null', () => {
      const value = null;
      const responseOfTheValidation = required()(value);
      expect(responseOfTheValidation).toEqual('Required');
    });
    it('a field is null and it has a custom message', () => {
      const value = null;
      const customMessage = 'This field is Required!'
      const responseOfTheValidation = required(customMessage)(value);
      expect(responseOfTheValidation).toEqual(customMessage);
    });
  });

  describe('It should success (return undefined) when', () => {
    it('a field is required and it is not empty', () => {
      const value = 'something wrote';
      const responseOfTheValidation = required()(value);
      expect(responseOfTheValidation).toBeUndefined();
    });

    it('a field is required and it is a number', () => {
      const value = 1234;
      const responseOfTheValidation = required()(value);
      expect(responseOfTheValidation).toBeUndefined();
    });
  });
});

describe('Validate Numeric', () => {
  describe('It should return a message error when', () => {
    it('a field is a string with characters that are not numbers', () => {
      const value = 'asdsad12313 asdas';
      const responseOfTheValidation = validateNumeric()(value);
      expect(responseOfTheValidation).toEqual('This value should be a valid number');
    });
    it('a field is a boolean (with custom message)', () => {
      const value = true;
      const customMessage = 'This field should be numeric!'
      const responseOfTheValidation = validateNumeric(customMessage)(value);
      expect(responseOfTheValidation).toEqual(customMessage);
    });
  });

  describe('It should success (return undefined) when', () => {
    it('a field is null', () => {
      const value = null;
      const responseOfTheValidation = validateNumeric()(value);
      expect(responseOfTheValidation).toBeUndefined();
    });

    it('a field is empty', () => {
      const value = '';
      const responseOfTheValidation = validateNumeric()(value);
      expect(responseOfTheValidation).toBeUndefined();
    });
    it('a field is undefined with custom message', () => {
      const value = undefined;
      const customMessage = 'This field should be numeric not undefined!'
      const responseOfTheValidation = validateNumeric(customMessage)(value);
      expect(responseOfTheValidation).toBeUndefined();
    });
    it('a field is a string but numeric', () => {
      const value = '12313';
      const responseOfTheValidation = validateNumeric()(value);
      expect(responseOfTheValidation).toBeUndefined();
    });
    it('a field is numeric', () => {
      const value = 1231;
      const responseOfTheValidation = validateNumeric()(value);
      expect(responseOfTheValidation).toBeUndefined();
    });
  });
});

describe('Validate Alphanumeric', () => {
  describe('It should return a message error when', () => {
    it('a field is a string with strange characters as #, $', () => {
      const value = '##asdsad12313 asda$s$$$';
      const responseOfTheValidation = validateAlphanumeric()(value);
      expect(responseOfTheValidation)
        .toEqual("This value shouldn't contain special characters");
    });
    it('a field is a boolean (with custom message)', () => {
      const value = true;
      const customMessage = 'This field should be alphanumeric!'
      const responseOfTheValidation = validateNumeric(customMessage)(value);
      expect(responseOfTheValidation).toEqual(customMessage);
    });
  });

  describe('It should success (return undefined) when', () => {
    it('a field is undefined with custom message', () => {
      const value = undefined;
      const customMessage = 'This field should be alphanumeric not undefined!'
      const responseOfTheValidation = validateAlphanumeric(customMessage)(value);
      expect(responseOfTheValidation).toBeUndefined();
    });
    it('a field is null', () => {
      const value = null;
      const responseOfTheValidation = validateAlphanumeric()(value);
      expect(responseOfTheValidation).toBeUndefined();
    });
    it('a field is a string numeric', () => {
      const value = '12313';
      const responseOfTheValidation = validateAlphanumeric()(value);
      expect(responseOfTheValidation).toBeUndefined();
    });

    it('a field is a string alphanumeric', () => {
      const value = 'asdasd12313';
      const responseOfTheValidation = validateAlphanumeric()(value);
      expect(responseOfTheValidation).toBeUndefined();
    });

    it('a field is numeric', () => {
      const value = 1231;
      const responseOfTheValidation = validateAlphanumeric()(value);
      expect(responseOfTheValidation).toBeUndefined();
    });
  });
});

describe('Validate Email', () => {
  describe('It should return a message error when', () => {
    it('a field is a string that is not an email', () => {
      const value = 'asdaasd';
      const responseOfTheValidation = validateEmail()(value);
      expect(responseOfTheValidation)
        .toEqual('This value is not a valid email');
    });
    it('a field is a string with a@b', () => {
      const value = 'david@paley';
      const customMessage = 'This field should be a valid email!'
      const responseOfTheValidation = validateEmail(customMessage)(value);
      expect(responseOfTheValidation).toEqual(customMessage);
    });
  });

  describe('It should success (return undefined) when', () => {
    it('a field is valid email', () => {
      const value = 'david.paleyy@gmail.com';
      const customMessage = 'This field should be alphanumeric not undefined!'
      const responseOfTheValidation = validateEmail(customMessage)(value);
      expect(responseOfTheValidation).toBeUndefined();
    });
    it('a field is null', () => {
      const value = null;
      const responseOfTheValidation = validateEmail()(value);
      expect(responseOfTheValidation).toBeUndefined();
    });
  });
});

describe('Validate No Negative numbers', () => {
  describe('It should return a message error when', () => {
    it('a field is a negative number', () => {
      const value = -123;
      const responseOfTheValidation = validateNonNegative()(value);
      expect(responseOfTheValidation)
        .toEqual("This value shouldn't be negative");
    });
    it('a field is a string with a negative number', () => {
      const value = '-555';
      const responseOfTheValidation = validateNonNegative()(value);
      expect(responseOfTheValidation).toEqual("This value shouldn't be negative");
    });
  });

  describe('It should success (return undefined) when', () => {
    it('a field is a string with a positive number', () => {
      const value = '123213';
      const responseOfTheValidation = validateNonNegative()(value);
      expect(responseOfTheValidation).toBeUndefined();
    });
    it('a field is a positive number', () => {
      const value = 5436;
      const responseOfTheValidation = validateNonNegative()(value);
      expect(responseOfTheValidation).toBeUndefined();
    });
    it('a field is zero', () => {
      const value = 0;
      const responseOfTheValidation = validateNonNegative()(value);
      expect(responseOfTheValidation).toBeUndefined();
    });
    it('a field is null', () => {
      const value = null;
      const responseOfTheValidation = validateNonNegative()(value);
      expect(responseOfTheValidation).toBeUndefined();
    });
  });
});

describe('Validate numbers higher than zero', () => {
  describe('It should return a message error when', () => {
    it('a field is a negative number', () => {
      const value = -123;
      const responseOfTheValidation = validateHigherThanZero()(value);
      expect(responseOfTheValidation)
        .toEqual('This value should be higher than zero');
    });
    it('a field is a string with value 0', () => {
      const value = '0';
      const responseOfTheValidation = validateHigherThanZero()(value);
      expect(responseOfTheValidation).toEqual('This value should be higher than zero');
    });

    it('a field is a 0', () => {
      const value = 0;
      const responseOfTheValidation = validateHigherThanZero()(value);
      expect(responseOfTheValidation).toEqual('This value should be higher than zero');
    });
  });

  describe('It should success (return undefined) when', () => {
    it('a field is a number higher than zero', () => {
      const value = 555;
      const responseOfTheValidation = validateHigherThanZero()(value);
      expect(responseOfTheValidation).toBeUndefined();
    });
    it('a field is a string with a number', () => {
      const value = '555';
      const responseOfTheValidation = validateHigherThanZero()(value);
      expect(responseOfTheValidation).toBeUndefined();
    });
    it('a field is null', () => {
      const value = null;
      const responseOfTheValidation = validateHigherThanZero()(value);
      expect(responseOfTheValidation).toBeUndefined();
    });
    it('a field is undefined', () => {
      const value = undefined;
      const responseOfTheValidation = validateHigherThanZero()(value);
      expect(responseOfTheValidation).toBeUndefined();
    });
  });
});

describe('Validate Min Amount', () => {
  describe('It should return a message error when', () => {
    it('a field is higher than a number', () => {
      const value = 11;
      const min = 12;
      const responseOfTheValidation = minAmount(min)(value);
      expect(responseOfTheValidation)
        .toEqual(`This value should not be less than ${min}`);
    });
    it('a field is higher than a number (beeing a string', () => {
      const value = '11';
      const min = '12';
      const responseOfTheValidation = minAmount(min)(value);
      expect(responseOfTheValidation)
        .toEqual(`This value should not be less than ${min}`);
    });
  });

  describe('It should success (return undefined) when', () => {
    it('a field is less than a number', () => {
      const value = 222;
      const min = 123;
      const responseOfTheValidation = minAmount(min)(value);
      expect(responseOfTheValidation).toBeUndefined();
    });
    it('a field is less than a number (strings)', () => {
      const value = '233';
      const min = '133';
      const responseOfTheValidation = minAmount(min)(value);
      expect(responseOfTheValidation).toBeUndefined();
    });
    it('a field is equal to another', () => {
      const value = '200';
      const min = '200';
      const responseOfTheValidation = minAmount(min)(value);
      expect(responseOfTheValidation).toBeUndefined();
    });
    it('a field is undefined', () => {
      const value = undefined;
      const responseOfTheValidation = minAmount()(value);
      expect(responseOfTheValidation).toBeUndefined();
    });
  });
});

describe('Validate Max Amount', () => {
  describe('It should return a message error when', () => {
    it('a field is higher than a number', () => {
      const value = 12;
      const max = 11;
      const responseOfTheValidation = maxAmount(max)(value);
      expect(responseOfTheValidation)
        .toEqual(`This value should not be more than ${max}`);
    });
    it('a field is higher than a number (beeing a string', () => {
      const value = '12';
      const max = '11';
      const responseOfTheValidation = maxAmount(max)(value);
      expect(responseOfTheValidation)
        .toEqual(`This value should not be more than ${max}`);
    });
  });
  describe('It should success (return undefined) when', () => {
    it('a field is less than a number', () => {
      const value = 222;
      const max = 333;
      const responseOfTheValidation = maxAmount(max)(value);
      expect(responseOfTheValidation).toBeUndefined();
    });
    it('a field is less than a number (strings)', () => {
      const value = '233';
      const max = '455';
      const responseOfTheValidation = maxAmount(max)(value);
      expect(responseOfTheValidation).toBeUndefined();
    });
    it('a field is equal to another', () => {
      const value = '200';
      const max = '200';
      const responseOfTheValidation = maxAmount(max)(value);
      expect(responseOfTheValidation).toBeUndefined();
    });
    it('a field is undefined', () => {
      const value = undefined;
      const max = '200';
      const responseOfTheValidation = maxAmount(max)(value);
      expect(responseOfTheValidation).toBeUndefined();
    });
  });
});

describe('Validate Max Characters', () => {
  describe('It should return a message error when', () => {
    it('a field has more characters that it should', () => {
      const value = 'asdas';
      const max = 1;
      const responseOfTheValidation = maxCharacters(max)(value);
      expect(responseOfTheValidation)
        .toEqual(`This value should contain maximum ${max} characters`);
    });
  });
  describe('It should success (return undefined) when', () => {
    it('a field equal amount of characters as the max number', () => {
      const value = '12';
      const max = 2;
      const responseOfTheValidation = maxCharacters(max)(value);
      expect(responseOfTheValidation).toBeUndefined();
    });
    it('a field has less characters than the number defined', () => {
      const value = '222';
      const max = 5;
      const responseOfTheValidation = maxCharacters(max)(value);
      expect(responseOfTheValidation).toBeUndefined();
    });
    it('a field is undefined', () => {
      const value = undefined;
      const max = 3;
      const responseOfTheValidation = maxCharacters(max)(value);
      expect(responseOfTheValidation).toBeUndefined();
    });
  });
});

describe('Validate Min Characters', () => {
  describe('It should return a message error when', () => {
    it('a field has less characters that it should', () => {
      const value = 'asdas';
      const max = 10;
      const responseOfTheValidation = minCharacters(max)(value);
      expect(responseOfTheValidation)
        .toEqual(`This value should contain minimum ${max} characters`);
    });
  });
  describe('It should success (return undefined) when', () => {
    it('a field equal amount of characters as the min number', () => {
      const value = '12';
      const max = 2;
      const responseOfTheValidation = minCharacters(max)(value);
      expect(responseOfTheValidation).toBeUndefined();
    });
    it('a field has more characters than the number defined', () => {
      const value = '222';
      const max = 2;
      const responseOfTheValidation = minCharacters(max)(value);
      expect(responseOfTheValidation).toBeUndefined();
    });
    it('a field is undefined', () => {
      const value = undefined;
      const max = '200';
      const responseOfTheValidation = minCharacters(max)(value);
      expect(responseOfTheValidation).toBeUndefined();
    });
  });
});

describe('Validate Min Characters', () => {
  describe('It should return a message error when', () => {
    it('a field is not a valid date', () => {
      const value = 'asdas';
      const responseOfTheValidation = validDate()(value);
      expect(responseOfTheValidation)
        .toEqual('This should be a valid date (for example: YYYY-MM-DD)');
    });
    it('a field is not a string', () => {
      const value = 3;
      const responseOfTheValidation = validDate()(value);
      expect(responseOfTheValidation)
        .toEqual('This should be a valid date (for example: YYYY-MM-DD)');
    });
  });
  describe('It should success (return undefined) when', () => {
    it('a field is a valid date', () => {
      const value = '1991-02-11';
      const responseOfTheValidation = validDate()(value);
      expect(responseOfTheValidation).toBeUndefined();
    });
    it('a field is undefined', () => {
      const value = undefined;
      const max = '200';
      const responseOfTheValidation = validDate(max)(value);
      expect(responseOfTheValidation).toBeUndefined();
    });
  });
});

