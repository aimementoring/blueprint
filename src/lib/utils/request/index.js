import crossFetch from 'cross-fetch';
import { getFromStorage } from '../localStorage';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options) {
  const fetchOptions = { ...options };

  if (options.method === 'POST' || options.method === 'PUT') {
    fetchOptions.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
      ...options.headers,
    };
    if (options.hasAuthorization) {
      fetchOptions.headers.Authorization = `Bearer ${getFromStorage('loginToken')}`;
      options.hasAuthorization = undefined;
    }
    fetchOptions.body = JSON.stringify(options.body);
  }

  return crossFetch(url, fetchOptions)
    .then(checkStatus)
    .then(response => {
      return response.status !== 204 ? response.json() : {};
    });
}
