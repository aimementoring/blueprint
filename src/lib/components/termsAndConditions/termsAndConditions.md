```js
initialState = {
  value: false,
};

function updateValue(name, value) {
  setState({ [name]: value });
}

<TermsAndConditions
  checkboxLabel="With children"
  onChange={updateValue}
  name="value"
  value={state.value}
  height={150}
>
  <h1>Lorem ipsum dolor sit amet</h1>
  <p>
    {`consectetur adipiscing elit. Nullam vitae augue commodo, euismod erat in, mollis diam. Suspendisse tristique justo sem, id commodo lectus porttitor et. In tempus libero lacus. Proin viverra facilisis ultricies. Phasellus aliquet efficitur ante, ac dignissim velit sollicitudin eu. Curabitur non nunc dictum, eleifend ligula feugiat, convallis augue. Ut accumsan arcu ac lobortis lacinia. Donec vulputate ligula vel elit maximus, non eleifend lorem sagittis. Praesent dapibus ante ac lectus fermentum blandit.\n
    Duis mollis dignissim elit eget rhoncus. Sed consectetur metus et ipsum sodales, non lacinia nulla varius. Curabitur dictum fringilla tellus, eu feugiat urna convallis nec. Donec at massa at metus accumsan finibus sit amet vel magna.\n
    Morbi vehicula id neque quis fermentum. Cras mauris metus, rutrum id auctor id, molestie vitae ante. Ut pretium egestas pellentesque. Integer placerat ullamcorper massa, nec maximus arcu efficitur vitae. Quisque odio est, vehicula quis justo at, tempus vulputate lectus. Vivamus sagittis metus et aliquam interdum. Nam in pharetra risus. Proin lectus ligula, pellentesque non nulla nec, fringilla porttitor est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;\n
    Duis vel pharetra urna. Nam finibus risus egestas tortor interdum rhoncus ut sed dolor. Integer quis porta nulla. Maecenas dignissim purus ac nisi viverra tristique. Cras dapibus est commodo est lobortis, consectetur faucibus odio fermentum. Donec tincidunt quis augue ut tempor. Nam consectetur faucibus nisl, vitae hendrerit metus venenatis id. In facilisis lacinia elit sed tempor.`}
  </p>
</TermsAndConditions>;
```

```js
initialState = {
  value: false,
};

function updateValue(name, value) {
  setState({ [name]: value });
}

<TermsAndConditions
  drive="2PACX-1vRvWKxJfAav1AuArdiyMcSR7znvOOo-ytMLASr3L5zw8bUdvYgBtSwzV7ME5FtWGlTQNVVsIvv4ukMh"
  onChange={updateValue}
  name="value"
  value={state.value}
/>;
```

```js
initialState = {
  value: false,
};

function updateValue(name, value) {
  setState({ [name]: value });
}

<TermsAndConditions
  pdf="https://d1muvgoqe3g8vw.cloudfront.net/website/assets/pdf/strategy/AIME_strat_1401.pdf"
  onChange={updateValue}
  name="value"
  value={state.value}
/>;
```

```js
initialState = {
  value: false,
};

function updateValue(name, value) {
  setState({ [name]: value });
}

<TermsAndConditions
  pdf="https://d1muvgoqe3g8vw.cloudfront.net/website/assets/pdf/strategy/AIME_strat_1401.pdf"
  checkboxLabel="With a checkbox to check"
  onChange={updateValue}
  name="value"
  value={state.value}
  height={300}
/>;
```

```js
initialState = {
  value: false,
};

function updateValue(name, value) {
  setState({ [name]: value });
}

<TermsAndConditions
  checkboxLabel="Testing with a paragraph"
  onChange={updateValue}
  name="value"
  value={state.value}
  height={150}
  paragraph={`
    consectetur adipiscing elit. Nullam vitae augue commodo, euismod erat in, mollis diam. Suspendisse tristique justo sem, id commodo lectus porttitor et. In tempus libero lacus. Proin viverra facilisis ultricies. Phasellus aliquet efficitur ante, ac dignissim velit sollicitudin eu. Curabitur non nunc dictum, eleifend ligula feugiat, convallis augue. Ut accumsan arcu ac lobortis lacinia. Donec vulputate ligula vel elit maximus, non eleifend lorem sagittis. Praesent dapibus ante ac lectus fermentum blandit.\n
    Duis mollis dignissim elit eget rhoncus. Sed consectetur metus et ipsum sodales, non lacinia nulla varius. Curabitur dictum fringilla tellus, eu feugiat urna convallis nec. Donec at massa at metus accumsan finibus sit amet vel magna.\n
    Morbi vehicula id neque quis fermentum. Cras mauris metus, rutrum id auctor id, molestie vitae ante. Ut pretium egestas pellentesque. Integer placerat ullamcorper massa, nec maximus arcu efficitur vitae. Quisque odio est, vehicula quis justo at, tempus vulputate lectus. Vivamus sagittis metus et aliquam interdum. Nam in pharetra risus. Proin lectus ligula, pellentesque non nulla nec, fringilla porttitor est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;\n
    Duis vel pharetra urna. Nam finibus risus egestas tortor interdum rhoncus ut sed dolor. Integer quis porta nulla. Maecenas dignissim purus ac nisi viverra tristique. Cras dapibus est commodo est lobortis, consectetur faucibus odio fermentum. Donec tincidunt quis augue ut tempor. Nam consectetur faucibus nisl, vitae hendrerit metus venenatis id. In facilisis lacinia elit sed tempor.
  `}
/>;
```

```js
initialState = {
  value: false,
};

function updateValue(name, value) {
  setState({ [name]: value });
}

<TermsAndConditions
  checkboxLabel="Multiple Paragraphs as Array"
  onChange={updateValue}
  name="value"
  value={state.value}
  height={150}
  paragraph={[
    `Nullam vitae augue commodo, euismod erat in, mollis diam. Suspendisse tristique justo sem, id commodo lectus porttitor et. In tempus libero lacus. Proin viverra facilisis ultricies. Phasellus aliquet efficitur ante, ac dignissim velit sollicitudin eu. Curabitur non nunc dictum, eleifend ligula feugiat, convallis augue. Ut accumsan arcu ac lobortis lacinia. Donec vulputate ligula vel elit maximus, non eleifend lorem sagittis. Praesent dapibus ante ac lectus fermentum blandit.`,
    `Duis mollis dignissim elit eget rhoncus. Sed consectetur metus et ipsum sodales, non lacinia nulla varius. Curabitur dictum fringilla tellus, eu feugiat urna convallis nec. Donec at massa at metus accumsan finibus sit amet vel magna.`,
    `Morbi vehicula id neque quis fermentum. Cras mauris metus, rutrum id auctor id, molestie vitae ante.`,
    `Duis vel pharetra urna. Nam finibus risus egestas tortor interdum rhoncus ut sed dolor. Integer quis porta nulla. Maecenas dignissim purus ac nisi viverra tristique. Cras dapibus est commodo est lobortis, consectetur faucibus odio fermentum. Donec tincidunt quis augue ut tempor. Nam consectetur faucibus nisl, vitae hendrerit metus venenatis id. In facilisis lacinia elit sed tempor.`,
  ]}
/>;
```
