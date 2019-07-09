```js
initialState = {
  starSelected: 0,
}

function handleStarSelected(starSelected) {
  console.log(starSelected);
  setState({ starSelected });
}

<StarsFeedback
  starSelected={state.starSelected}
  handleStarSelected={handleStarSelected}
/>;
```
