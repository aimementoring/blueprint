### GET

```jsx static
request('http://localhost:3000/api/test');
```

### POST

```jsx static
request('http://localhost:3000/api/test', {
  method: 'POST',
  hasAuthorization: true,
  headers: {
    'content-type': 'application/json',
  },
});
```
