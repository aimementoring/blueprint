import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Table from 'rc-table';
import { componentPropTypes, defaultComponentPropTypes } from '../../utils/componentPropTypes';
import Loading from '../loading';
import { camelCaseToWords, wordsToCamelCase } from '../../utils/helpers';
import styles from './recordList.module.scss';

// Renders a list of objects with the attributes listed in the columnNames prop
// Useful for an index/list view of records.

// Use like this:
// <RecordList records={myRecords} columnNames={['name', 'age']} keyProperty="id" />
//
// If you would like to have a Record List with selectable records (checkbox in first column),
// use the prop `selectable`, `onSelect` and `selectedRecords`,
// where `selectable` is set to true,
// `onSelect` is a function with the arguments `(isChecked, recordId)`,
// and `selectedRecords` is an array of ids.

export default class RecordList extends PureComponent {
  static propTypes = {
    records: PropTypes.array,
    recordsName: PropTypes.string,
    keyProperty: PropTypes.string,
    columnNames: PropTypes.array,
    selectable: PropTypes.bool,
    onSelect: PropTypes.func,
    selectedRecords: PropTypes.array,
    ...componentPropTypes,
  };

  static defaultProps = {
    records: null,
    recordsName: 'records',
    keyProperty: 'id',
    selectable: false,
    selectedRecords: [],
    ...defaultComponentPropTypes,
  };


  getColumnsFor = (records = []) => {
    const { recordsName, columnNames, selectable, onSelect, selectedRecords } = this.props;
    if (!records.length) return [];

    const getColumnClass = (columnName, columnIndex) => {
      const firstColumn = columnIndex === 0 ? styles.firstColumn : '';
      return `${firstColumn} ${wordsToCamelCase(
        [recordsName, columnName].filter(Boolean).join(' ')
      )}`;
    };
    const columns = columnNames
      .map((columnName, columnIndex) => {
        return {
          title: camelCaseToWords(columnName),
          dataIndex: columnName,
          key: columnName,
          className: getColumnClass(columnName, columnIndex),
        };
      })
      .filter(Boolean);

    if (selectable) {
      return [
        {
          render: (text, record) => (
            <input
              type="checkbox"
              onChange={e => onSelect(e.target.checked, record.id)}
              checked={selectedRecords.indexOf(record.id) > -1}
            />
          ),
          key: 'selected',
        },
        ...columns,
      ];
    }
    return columns;
  };

  render() {
    const {
      records,
      recordsName,
      selectedRecords,
      keyProperty,
      selectable,
      containerClassName,
      theme,
    } = this.props;

    const getRowClass = record => (selectedRecords.indexOf(record.id) > -1 ? styles.activeRow : '');
    const getRowKey = record => record[keyProperty];
    const renderRecordsCount = () => {
      if (!records.length) return '';
      const recordsFound = `${records.length} ${recordsName} found.`;
      const recordsSelected = `${selectedRecords.length} ${recordsName} selected.`;
      return selectable ? `${recordsFound} ${recordsSelected}` : recordsFound;
    };

    if (!records) return <Loading loading />;

    return (
      <div className={styles[`theme-${theme}`]}>
        <div className={containerClassName}>
          <div className={styles.tableContainer}>
            <Table
              columns={this.getColumnsFor(records)}
              data={records}
              rowKey={getRowKey}
              rowClassName={getRowClass}
              emptyText={this.props.emptyText || `No ${recordsName} found.`}
              footer={renderRecordsCount}
            />
          </div>
        </div>
      </div>
    );
  }
}
