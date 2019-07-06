```js
let selectedRecords = [];

const getRowClass = record => (selectedRecords.indexOf(record.id) > -1 ? 'active' : '');

const columns = [
  {
    title: 'Name',
    dataIndex: 'firstName',
    key: 'firstName',
    render: (text, record) => <div>{`${text} -> ${record.surname}`}</div>,
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
];

const header = <h1>This is where you could place your table title - not always needed</h1>;

/// Hey Kevin, for this header ^ we would eventually use the title component within this table component, right?

const footer = () => (
  <div>
    <p>Testing Footer - rows quantity: {data.length}</p>
  </div>
);

const data = [
  {
    id: 1,
    firstName: 'John',
    surname: 'Snow',
    gender: 'Male',
    age: 30,
  },
  {
    id: 2,
    firstName: 'Arya',
    surname: 'Stark',
    gender: 'Female',
    age: 15,
  },
  {
    id: 3,
    firstName: 'Daenerys',
    surname: 'Targaryen',
    gender: 'Female',
    age: 27,
  },
  {
    id: 4,
    firstName: 'Cersei',
    surname: 'Lannister',
    gender: 'Female',
    age: 45,
  },
];

<Table
  header={header}
  footer={footer()}
  columns={columns}
  data={data}
  rowKey="id"
  rowClassName={getRowClass}
  emptyText="My empty text"
/>;
```
