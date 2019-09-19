Renders a list of objects with the attributes listed in the columnNames prop.
Useful for an index/list view of records.

```js

const records = [
  {
    name: "Ironman",
    wearsSuit: "✅",
    portrayedBy: "Robert Downey Jr.",
    power: 100,
    id: 'iron-man',
  },
  {
    name: "Captain Marvel",
    wearsSuit: "✅",
    portrayedBy: "Carol Danvers",
    power: 9999,
    id: 'captain-marvel',
  },
  {
    name: "Hulk",
    wearsSuit: "❌",
    portrayedBy: "Mark Ruffalo",
    power: 8000,
    id: 'hulk',
  },
];

const columnNames = ['name', 'wearsSuit', 'portrayedBy'];

const handleSelect = (isChecked, recordId) => {
  alert('You have checked / unchecked ' + recordId);
  // here you would update the state
};

<RecordList
  records={records}
  columnNames={columnNames}
  selectable
  onSelect={handleSelect}
  recordsName="heroes"
  selectedRecords={['captain-marvel']}
/>
```
