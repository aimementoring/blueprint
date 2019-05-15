const Airtable = require('airtable');

const AIRTABLE_ENDPOINT_URL = 'https://api.airtable.com';

export const airtableFetchRecords = async (config, filter = null, fields = null) => {
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

  return await base(config.table)
    .select(query)
    .eachPage((records, fetchNextPage) => {
      records.forEach(record => {
        options.push(config.recordBuilder(record));
      });
      fetchNextPage();
    });
};

export const loadList = async (fieldsMapping, config, filter = null, fields = null) => {
  const fieldsAttributes =
    fields && fields.length
      ? fields.map(field => fieldsMapping[field])
      : Object.keys(fieldsMapping).map(key => fieldsMapping[key]);

  return await airtableFetchRecords(config, filter, fieldsAttributes);
};

export const createRecord = async (config, fields) => {
  Airtable.configure({
    endpointUrl: AIRTABLE_ENDPOINT_URL,
    apiKey: process.env.REACT_APP_AIRTABLE_API_KEY,
  });
  const base = Airtable.base(config.baseName);
  return await base(config.table).create(fields);
};

export const updateRecord = async (config, fields, recordId) => {
  Airtable.configure({
    endpointUrl: AIRTABLE_ENDPOINT_URL,
    apiKey: process.env.REACT_APP_AIRTABLE_API_KEY,
  });
  const base = Airtable.base(config.baseName);
  return await base(config.table).update(recordId, fields);
};
