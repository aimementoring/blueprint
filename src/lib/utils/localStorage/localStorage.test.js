import { setOnStorage, getFromStorage } from './index';

describe('setOnStorage', () => {
  beforeEach(() => {
    setOnStorage('token', 'abcd1234');
  });

  it('should key-value be saved in local storage', () => {
    const entry = JSON.parse(localStorage.getItem('token'));
    expect(entry.value).toEqual('abcd1234');
  });

  it('should have a createdAt attribute for that key', () => {
    const entry = JSON.parse(localStorage.getItem('token'));
    expect(entry.createdAt).not.toBeNull();
  });

  it('should have a createdAt attribute of today', () => {
    const entry = JSON.parse(localStorage.getItem('token'));
    const today = new Date();
    const createdAt = new Date(entry.createdAt);
    expect(createdAt.getMonth()).toBe(today.getMonth());
    expect(createdAt.getYear()).toBe(today.getYear());
    expect(createdAt.getDate()).toBe(today.getDate());
  });
});

describe('getFromStorage', () => {
  beforeEach(() => {
    setOnStorage('token', 'abcd1234');
  });

  it('should return null if value does not exists', () => {
    expect(getFromStorage('randomKey')).toBeNull();
  });

  it('should return the value for an existing key', () => {
    expect(getFromStorage('token')).not.toBeNull();
  });

  it('should return the same value saved on storage', () => {
    expect(getFromStorage('token')).toEqual('abcd1234');
  });
});
