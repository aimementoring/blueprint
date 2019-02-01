```js
initialState = { loading: false };

function showLoading() {
  setState({ loading: true });
  setTimeout(() => {
    setState({ loading: false });
  }, 5000);
}

<div>
  <button onClick={showLoading}>Show loading</button>
  <Loading loading={state.loading} />
</div>;
```
