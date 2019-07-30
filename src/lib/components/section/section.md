```js
<Section grow style={{ backgroundColor: 'blue' }}>
  <Section.Stack grow={1} style={{ backgroundColor: 'green' }} justifyContent="space-between">
    Column 1
    <Section.Row style={{ backgroundColor: 'red' }} grow={1}>
      Text content row 1
    </Section.Row>
    <Section.Row style={{ backgroundColor: 'red' }} grow={2}>
      Text content row 2
    </Section.Row>
  </Section.Stack>
  <Section.Stack grow={3} style={{ backgroundColor: 'green' }}>
    Column 2
    <Section.Row style={{ backgroundColor: 'gray' }} grow>
      Text content row 3
    </Section.Row>
  </Section.Stack>
</Section>
```
