```js
const paragraph = (
  <span>
    If you think you have what it takes to lead a mentoring movement in your community, you should{' '}
    <a>
      <strong>check out</strong>
    </a>{' '}
    what it means to be a <strong>Hooded Scholar</strong>
  </span>
);
const emoji = (
  <span role="img" aria-label="point down">
    👇🏿
  </span>
);
<div style={{ position: 'relative', minHeight: '280px' }}>
  <SideTrack
    title="Hey! Want to do more than just mentoring? Want to lead a mentoring program?"
    paragraph={paragraph}
    emoji={emoji}
  />
</div>;
```
