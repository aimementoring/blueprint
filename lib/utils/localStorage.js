var myOwnStorage = {};
/**
 * @param {string} key
 * @param {string} value
 * @example setOnStorage('token', 'abcd1234');
 */

function setOnStorage(key, value) {
  if (localStorage) {
    localStorage.setItem(key, JSON.stringify({
      createdAt: Date.now(),
      value: value
    }));
  } else {
    myOwnStorage[key] = value;
  }
}
/**
 * @param {string} key
 * @returns {string}
 * @example getFromStorage('token'); // Returns 'abcd1234'
 */

function getFromStorage(key) {
  try {
    if (localStorage) {
      var item = JSON.parse(localStorage.getItem(key));
      return item && item.value;
    } else {
      return myOwnStorage[key];
    }
  } catch (e) {
    return null;
  }
}

export { getFromStorage, setOnStorage };
