const myOwnStorage = {};

/**
 *
 * @param {string} key
 * @param {string} value
 * @example setOnStorage('token', 'abcd1234');
 * @public
 */
export function setOnStorage(key, value) {
  if (localStorage) {
    localStorage.setItem(
      key,
      JSON.stringify({
        createdAt: Date.now(),
        value,
      }),
    );
  } else {
    myOwnStorage[key] = value;
  }
}

/**
 *
 * @param {string} key
 * @example getFromStorage('token'); // Returns 'abcd1234'
 * @public
 */
export function getFromStorage(key) {
  try {
    if (localStorage) {
      const item = JSON.parse(localStorage.getItem(key));
      return item && item.value;
    } else {
      return myOwnStorage[key];
    }
  } catch (e) {
    return null;
  }
}
