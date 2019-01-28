const Airtable = require('airtable');

const AIRTABLE_ENDPOINT_URL = 'https://api.airtable.com';

export async function airtableFetchRecords(config, filter = null, fields = null) {
  Airtable.configure({
    endpointUrl: AIRTABLE_ENDPOINT_URL,
    apiKey: process.env.REACT_APP_AIRTABLE_API_KEY,
  });
  const base = Airtable.base(config.baseName);
  const options = [];
  const query = {
    view: config.gridView,
  };

  if (filter) query.filterByFormula = filter;
  if (fields) query.fields = fields;

  return new Promise((resolve, reject) => {
    base(config.table)
      .select(query)
      .eachPage(
        (records, fetchNextPage) => {
          records.forEach(record => {
            options.push(config.recordBuilder(record));
          });
          fetchNextPage();
        },
        err => {
          if (err) {
            reject(err);
          } else {
            resolve(options);
          }
        },
      );
  });
}

export async function loadList(fieldsMapping, config, filter = null, fields = null) {
  const fieldsAttributes =
    fields && fields.length
      ? fields.map(field => fieldsMapping[field])
      : Object.keys(fieldsMapping).map(key => fieldsMapping[key]);

  return airtableFetchRecords(config, filter, fieldsAttributes);
}

export async function createRecord(config, fields) {
  Airtable.configure({
    endpointUrl: AIRTABLE_ENDPOINT_URL,
    apiKey: process.env.REACT_APP_AIRTABLE_API_KEY,
  });
  const base = Airtable.base(config.baseName);
  return new Promise((resolve, reject) => {
    base(config.table).create(fields, err => {
      if (err) {
        reject(err);
      }
      resolve();
    });
  });
}

export async function updateRecord(config, fields, recordId) {
  Airtable.configure({
    endpointUrl: AIRTABLE_ENDPOINT_URL,
    apiKey: process.env.REACT_APP_AIRTABLE_API_KEY,
  });
  const base = Airtable.base(config.baseName);
  return new Promise((resolve, reject) => {
    base(config.table).update(recordId, fields, err => {
      if (err) {
        reject(err);
      }
      resolve();
    });
  });
}
