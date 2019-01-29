### airtableFetchRecords

```jsx static
const config = {
  baseName: process.env.REACT_APP_AIRTABLE_BASE,
  table: 'Table name',
  gridView: 'Grid view',
  recordBuilder: record => ({
    id: record.id,
    name: record.get('Name'),
    status: record.get('Status'),
    description: record.get('Description'),
  }),
};

const filters = 'AND(IS_AFTER({Expire}, NOW()) AND IS_BEFORE({Publish}, NOW()))';
const fields = ['Name', 'Status', 'Description'];

airtableFetchRecords(config, filters, fields).then(recordsList => {
  console.log(recordList);
});
```

### loadList

```jsx static
const fieldsMapping = {
  id: 'id',
  name: 'Full Name',
  photo: 'Photo',
  contact_type: 'Contact Type',
  gender: 'Gender',
  age: 'Age',
};

const config = {
  baseName: process.env.REACT_APP_AIRTABLE_BASE,
  table: 'Table name',
  gridView: 'All',
  recordBuilder: record => ({
    id: record.id,
    name: record.get(fieldsMapping.name),
    photo: record.get(fieldsMapping.photo),
    contact_type: record.get(fieldsMapping.contact_type),
    gender: record.get(fieldsMapping.gender),
    age: record.get(fieldsMapping.age),
  }),
};

// We can call this function without filter and fields
// And it generates fields array automatically, and empty filter
loadList(fieldsMapping, config).then(recordsList => {
  console.log(recordList);
});

// Or we can use filters and adds specific fields to retrieve
const fields = ['id', 'Full Name', 'Photo', 'Contact Type', 'Gender', 'Age'];
const filter = '';
loadList(fieldsMapping, config, filter, fields).then(recordsList => {
  console.log(recordList);
});
```

### createRecord

```jsx static
const config = {
  baseName: process.env.REACT_APP_AIRTABLE_BASE,
  table: 'Table Name',
  gridView: 'All',
  recordBuilder: record => ({
    id: record.id,
    name: record.get(fieldsMapping.name),
    gender: record.get(fieldsMapping.gender),
    age: record.get(fieldsMapping.age),
  }),
};

const fields = { name: 'John', gender: 'male', age: 22 };

createRecord(config, fields).then(() => {
  alert('Created successfully');
});
```

### updateRecord

```jsx static
const config = {
  baseName: process.env.REACT_APP_AIRTABLE_BASE,
  table: 'Table Name',
  gridView: 'All',
  recordBuilder: record => ({
    id: record.id,
    name: record.get(fieldsMapping.name),
    start: record.get(fieldsMapping.start),
    end: record.get(fieldsMapping.end),
    location: record.get(fieldsMapping.location),
    type: record.get(fieldsMapping.type),
  }),
};

const fields = { name: 'John', type: 'mentee' };
const recordId = 83;

updateRecord(config, fields, recordId).then(() => {
  alert('Updated successfully');
});
```
