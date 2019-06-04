import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RcTable, { INTERNAL_COL_DEFINE } from 'rc-table';
import shallowEqual from 'shallowequal';
import classNames from 'classnames';
import { flatArray, treeMap, flatFilter, normalizeColumns } from './util';
import FilterDropdown from './filterDropdown';
import createStore from './createStore';
import SelectionBox from './selectionBox';
import SelectionCheckboxAll from './selectionCheckboxAll';
import Column from './column';
import ColumnGroup from './columnGroup';
import createBodyRow from './createBodyRow';
import Pagination from '../pagination';
import Icon from '../icon';
import Spin, { SpinProps } from '../spin';
import { RadioChangeEvent } from '../radio';
import { CheckboxChangeEvent } from '../checkbox';
import { componentPropTypes, defaultComponentPropTypes } from '../../utils/componentPropTypes';
import styles from './standardTable.module.scss';

const defaultPagination = {
  onChange: noop,
  onShowSizeChange: noop,
};

const emptyObject = {};

export default class StandardTable extends Component {
  static propTypes = {
    ...componentPropTypes,
    dataSource: PropTypes.array,
    columns: PropTypes.array,
    prefixCls: PropTypes.string,
    useFixedHeader: PropTypes.bool,
    rowSelection: PropTypes.object,
    className: PropTypes.string,
    size: PropTypes.string,
    loading: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
    bordered: PropTypes.bool,
    onChange: PropTypes.func,
    locale: PropTypes.object,
    dropdownPrefixCls: PropTypes.string,
    sortDirections: PropTypes.array,
  };

  static defaultProps = {
    ...defaultComponentPropTypes,
    dataSource: [],
    useFixedHeader: false,
    className: '',
    size: 'default',
    loading: false,
    bordered: false,
    indentSize: 20,
    locale: {},
    rowKey: 'key',
    showHeader: true,
    sortDirections: ['ascend', 'descend'],
    childrenColumnName: 'children',
  };

  static Column = Column;
  static ColumnGroup = ColumnGroup;

  CheckboxPropsCache;
  store;
  columns;
  components;
  row;

  constructor(props) {
    super(props);

    this.columns = props.columns || normalizeColumns(props.children);

    this.createComponents(props.components);

    this.state = {
      ...this.getDefaultSortOrder(this.columns),
      filters: this.getFiltersFromColumns(),
      pagination: this.getDefaultPagination(props),
      pivot: undefined,
    };

    this.CheckboxPropsCache = {};

    this.store = createStore({
      selectedRowKeys: this.getRowSelection(props).selectedRowKeys || [],
      selectionDirty: false,
    });
  }

  componentWillReceiveProps(nextProps) {
    this.columns = nextProps.columns || normalizeColumns(nextProps.children);
    if ('pagination' in nextProps || 'pagination' in this.props) {
      this.setState(previousState => {
        const newPagination = {
          ...defaultPagination,
          ...previousState.pagination,
          ...nextProps.pagination,
        };
        newPagination.current = newPagination.current || 1;
        newPagination.pageSize = newPagination.pageSize || 10;
        return { pagination: nextProps.pagination !== false ? newPagination : emptyObject };
      });
    }
    if (nextProps.rowSelection && 'selectedRowKeys' in nextProps.rowSelection) {
      this.store.setState({
        selectedRowKeys: nextProps.rowSelection.selectedRowKeys || [],
      });
    } else if (this.props.rowSelection && !nextProps.rowSelection) {
      this.store.setState({
        selectedRowKeys: [],
      });
    }
    if ('dataSource' in nextProps && nextProps.dataSource !== this.props.dataSource) {
      this.store.setState({ selectionDirty: false });
    }
    this.CheckboxPropsCache = {};

    if (this.getSortOrderColumns(this.columns).length > 0) {
      const sortState = this.getSortStateFromColumns(this.columns);
      if (
        sortState.sortColumn !== this.state.sortColumn ||
        sortState.sortOrder !== this.state.sortOrder
      ) {
        this.setState(sortState);
      }
    }

    const filteredValueColumns = this.getFilteredValueColumns(this.columns);
    if (filteredValueColumns.length > 0) {
      const filtersFromColumns = this.getFiltersFromColumns(this.columns);
      const newFilters = { ...this.state.filters };
      Object.keys(filtersFromColumns).forEach(key => {
        newFilters[key] = filtersFromColumns[key];
      });
      if (this.isFiltersChanged(newFilters)) {
        this.setState({ filters: newFilters });
      }
    }

    this.createComponents(nextProps.components, this.props.components);
  }

  getFlatData = () => {
    const { childrenColumnName } = this.props;
    return flatArray(this.getLocalData(null, false), childrenColumnName);
  };

  getRecordKey = (record, index) => {
    const { rowKey } = this.props;
    const recordKey = typeof rowKey === 'function' ? rowKey(record, index) : record[rowKey];
    if (recordKey === undefined) {
      console.error(
        'Each record in dataSource of table should have a unique `key` prop, ' +
          'or set `rowKey` of Table to an unique primary key',
      );
    }
    return recordKey === undefined ? index : recordKey;
  };

  getDefaultPagination = props => {
    const pagination = typeof props.pagination === 'object' ? props.pagination : {};
    const current =
      'current' in pagination
        ? pagination.current
        : 'defaultCurrent' in pagination
        ? pagination.defaultCurrent
        : 1;
    const pageSize =
      'pageSize' in pagination
        ? pagination.pageSize
        : 'defaultPageSize' in pagination
        ? pagination.defaultPageSize
        : 10;

    return this.hasPagination(props)
      ? {
          ...defaultPagination,
          ...pagination,
          current,
          pageSize,
        }
      : {};
  };

  onRow = (prefixCls, record, index) => {
    const { onRow } = this.props;
    const custom = onRow ? onRow(record, index) : {};
    return {
      ...custom,
      prefixCls,
      store: this.store,
      rowKey: this.getRecordKey(record, index),
    };
  };

  setSelectedRowKeys = (selectedRowKeys, selectionInfo) => {
    const { selectWay, record, checked, changeRowKeys, nativeEvent } = selectionInfo;
    const rowSelection = this.getRowSelection(this.props);
    if (rowSelection && !('selectedRowKeys' in rowSelection)) {
      this.store.setState({ selectedRowKeys });
    }
    const data = this.getFlatData();
    if (!rowSelection.onChange && !rowSelection[selectWay]) return;

    const selectedRows = data.filter(this.filterByRecordKey(selectedRowKeys));
    if (rowSelection.onChange) {
      rowSelection.onChange(selectedRowKeys, selectedRows);
    }

    if (selectWay === 'onSelect' && rowSelection.onSelect) {
      rowSelection.onSelect(record, checked, selectedRows, nativeEvent);
    } else if (selectWay === 'onSelectMultiple' && rowSelection.onSelectMultiple) {
      const changeRows = data.filter(this.filterByRecordKey(changeRowKeys));
      rowSelection.onSelectMultiple(checked, selectedRows, changeRows);
    } else if (selectWay === 'onSelectAll' && rowSelection.onSelectAll) {
      const changeRows = data.filter(this.filterByRecordKey(changeRowKeys));
      rowSelection.onSelectAll(checked, selectedRows, changeRows);
    } else if (selectWay === 'onSelectInvert' && rowSelection.onSelectInvert) {
      rowSelection.onSelectInvert(selectedRowKeys);
    }
  };

  hasPagination = props => {
    return (props || this.props).pagination !== false;
  };

  isFiltersChanged = filters => {
    let filtersChanged = false;
    if (Object.keys(filters).length !== Object.keys(this.state.filters).length) {
      filtersChanged = true;
    } else {
      Object.keys(filters).forEach(columnKey => {
        if (filters[columnKey] !== this.state.filters[columnKey]) {
          filtersChanged = true;
        }
      });
    }
    return filtersChanged;
  };

  getSortOrderColumns = columns => {
    return flatFilter(columns || this.columns || [], column => 'sortOrder' in column);
  };

  getFilteredValueColumns = columns => {
    return flatFilter(
      columns || this.columns || [],
      column => typeof column.filteredValue !== 'undefined',
    );
  };

  filterByRecordKey = list => (row, i) => {
    return list.indexOf(this.getRecordKey(row, i)) >= 0;
  };

  getCheckboxPropsByItem = (item, index) => {
    const rowSelection = this.getRowSelection(this.props);
    if (!rowSelection.getCheckboxProps) return {};

    const key = this.getRecordKey(item, index);
    // Cache checkboxProps
    if (!this.CheckboxPropsCache[key]) {
      const checkboxProps = (this.CheckboxPropsCache[key] = rowSelection.getCheckboxProps(item));
      if ('checked' in checkboxProps || 'defaultChecked' in checkboxProps) {
        console.error(
          'Do not set `checked` or `defaultChecked` in `getCheckboxProps`. Please use `selectedRowKeys` instead.',
        );
      }
    }
    return this.CheckboxPropsCache[key];
  };

  getRowSelection = props => {
    return props.rowSelection || {};
  };

  getDefaultSelection = () => {
    const rowSelection = this.getRowSelection(this.props);
    if (!rowSelection.getCheckboxProps) return [];

    return this.getFlatData()
      .filter((item, rowIndex) => this.getCheckboxPropsByItem(item, rowIndex).defaultChecked)
      .map((record, rowIndex) => this.getRecordKey(record, rowIndex));
  };

  getFiltersFromColumns = columns => {
    const filters = {};
    this.getFilteredValueColumns(columns).forEach(col => {
      const colKey = this.getColumnKey(col);
      filters[colKey] = col.filteredValue;
    });
    return filters;
  };

  getDefaultSortOrder = columns => {
    const definedSortState = this.getSortStateFromColumns(columns);

    const defaultSortedColumn = flatFilter(
      columns || [],
      column => column.defaultSortOrder != null,
    )[0];

    if (defaultSortedColumn && !definedSortState.sortColumn) {
      return {
        sortColumn: defaultSortedColumn,
        sortOrder: defaultSortedColumn.defaultSortOrder,
      };
    }
    return definedSortState;
  };

  getSortStateFromColumns = columns => {
    // return first column which sortOrder is not falsy
    const sortedColumn = this.getSortOrderColumns(columns).filter(col => col.sortOrder)[0];

    if (sortedColumn) {
      return {
        sortColumn: sortedColumn,
        sortOrder: sortedColumn.sortOrder,
      };
    }

    return {
      sortColumn: null,
      sortOrder: null,
    };
  };

  getSorterFn = state => {
    const { sortOrder, sortColumn } = state || this.state;
    if (!sortOrder || !sortColumn || typeof sortColumn.sorter !== 'function') return;

    return (a, b) => {
      const result = sortColumn.sorter(a, b, sortOrder);
      return result === 0 ? 0 : sortOrder === 'descend' ? -result : result;
    };
  };

  isSameColumn = (a, b) => {
    if (a && b && a.key && a.key === b.key) return true;

    return (
      a === b ||
      shallowEqual(a, b, (value, other) => {
        if (typeof value === 'function' && typeof other === 'function') {
          return value === other || value.toString() === other.toString();
        }
      })
    );
  };

  toggleSortOrder = column => {
    if (!column.sorter) return;

    const sortDirections = column.sortDirections || this.props.sortDirections;
    const { sortOrder, sortColumn } = this.state;
    let newSortOrder;
    if (this.isSameColumn(sortColumn, column) && sortOrder !== undefined) {
      const methodIndex = sortDirections.indexOf(sortOrder) + 1;
      newSortOrder =
        methodIndex === sortDirections.length ? undefined : sortDirections[methodIndex];
    } else {
      newSortOrder = sortDirections[0];
    }

    const newState = {
      sortOrder: newSortOrder,
      sortColumn: newSortOrder ? column : null,
    };

    // Controlled
    if (this.getSortOrderColumns().length === 0) {
      this.setState(newState);
    }

    const { onChange } = this.props;
    if (onChange) {
      onChange.apply(
        null,
        this.prepareParamsArguments({
          ...this.state,
          ...newState,
        }),
      );
    }
  };

  handleSelect = (record, rowIndex, e) => {
    const checked = e.target.checked;
    const nativeEvent = e.nativeEvent;
    const defaultSelection = this.store.getState().selectionDirty ? [] : this.getDefaultSelection();
    let selectedRowKeys = this.store.getState().selectedRowKeys.concat(defaultSelection);
    const key = this.getRecordKey(record, rowIndex);
    const { pivot } = this.state;
    const rows = this.getFlatCurrentPageData();
    const realIndex = this.props.expandedRowRender
      ? rows.findIndex(row => this.getRecordKey(row, rowIndex) === key)
      : rowIndex;

    if (nativeEvent.shiftKey && pivot !== undefined && realIndex !== pivot) {
      const changeRowKeys = [];
      const direction = Math.sign(pivot - realIndex);
      const dist = Math.abs(pivot - realIndex);
      let step = 0;
      while (step <= dist) {
        const i = realIndex + step * direction;
        step += 1;
        const row = rows[i];
        const rowKey = this.getRecordKey(row, i);
        const checkboxProps = this.getCheckboxPropsByItem(row, i);
        if (!checkboxProps.disabled) {
          if (selectedRowKeys.includes(rowKey)) {
            if (!checked) {
              selectedRowKeys = selectedRowKeys.filter(selectedRow => rowKey !== selectedRow);
              changeRowKeys.push(rowKey);
            }
          } else if (checked) {
            selectedRowKeys.push(rowKey);
            changeRowKeys.push(rowKey);
          }
        }
      }

      this.setState({ pivot: realIndex });
      this.store.setState({ selectionDirty: true });

      this.setSelectedRowKeys(selectedRowKeys, {
        selectWay: 'onSelectMultiple',
        record,
        checked,
        changeRowKeys,
        nativeEvent,
      });
    } else {
      if (checked) {
        selectedRowKeys.push(this.getRecordKey(record, realIndex));
      } else {
        selectedRowKeys = selectedRowKeys.filter(selectedRow => key !== selectedRow);
      }

      this.setState({ pivot: realIndex });
      this.store.setState({ selectionDirty: true });
      this.setSelectedRowKeys(selectedRowKeys, {
        selectWay: 'onSelect',
        record,
        checked,
        changeRowKeys: void 0,
        nativeEvent,
      });
    }
  };

  handleRadioSelect = (record, rowIndex, e) => {
    const checked = e.target.checked;
    const nativeEvent = e.nativeEvent;
    const key = this.getRecordKey(record, rowIndex);
    const selectedRowKeys = [key];
    this.store.setState({ selectionDirty: true });
    this.setSelectedRowKeys(selectedRowKeys, {
      selectWay: 'onSelect',
      record,
      checked,
      changeRowKeys: void 0,
      nativeEvent,
    });
  };

  handleSelectRow = (selectionKey, index, onSelectFunc) => {
    const data = this.getFlatCurrentPageData();
    const defaultSelection = this.store.getState().selectionDirty ? [] : this.getDefaultSelection();
    const selectedRowKeys = this.store.getState().selectedRowKeys.concat(defaultSelection);
    const changeableRowKeys = data
      .filter((item, itemIndex) => !this.getCheckboxPropsByItem(item, itemIndex).disabled)
      .map((item, itemIndex) => this.getRecordKey(item, itemIndex));

    const changeRowKeys = [];
    let selectWay = 'onSelectAll';
    let checked;
    // handle default selection
    switch (selectionKey) {
      case 'all':
        changeableRowKeys.forEach(key => {
          if (selectedRowKeys.indexOf(key) < 0) {
            selectedRowKeys.push(key);
            changeRowKeys.push(key);
          }
        });
        selectWay = 'onSelectAll';
        checked = true;
        break;
      case 'removeAll':
        changeableRowKeys.forEach(key => {
          if (selectedRowKeys.indexOf(key) >= 0) {
            selectedRowKeys.splice(selectedRowKeys.indexOf(key), 1);
            changeRowKeys.push(key);
          }
        });
        selectWay = 'onSelectAll';
        checked = false;
        break;
      case 'invert':
        changeableRowKeys.forEach(key => {
          if (selectedRowKeys.indexOf(key) < 0) {
            selectedRowKeys.push(key);
          } else {
            selectedRowKeys.splice(selectedRowKeys.indexOf(key), 1);
          }
          changeRowKeys.push(key);
          selectWay = 'onSelectInvert';
        });
        break;
      default:
        break;
    }

    this.store.setState({ selectionDirty: true });
    // when select custom selection, callback selections[n].onSelect
    const { rowSelection } = this.props;
    let customSelectionStartIndex = 2;
    if (rowSelection && rowSelection.hideDefaultSelections) {
      customSelectionStartIndex = 0;
    }
    if (index >= customSelectionStartIndex && typeof onSelectFunc === 'function') {
      return onSelectFunc(changeableRowKeys);
    }
    this.setSelectedRowKeys(selectedRowKeys, {
      selectWay,
      checked,
      changeRowKeys,
    });
  };

  handlePageChange = (current, ...otherArguments) => {
    const props = this.props;
    const pagination = { ...this.state.pagination };
    pagination.current = current ? current : pagination.current || 1;
    pagination.onChange(pagination.current, ...otherArguments);

    const newState = { pagination };
    // Controlled current prop will not respond user interaction
    if (props.pagination && typeof props.pagination === 'object' && 'current' in props.pagination) {
      newState.pagination = {
        ...pagination,
        current: this.state.pagination.current,
      };
    }
    this.setState(newState);

    this.store.setState({ selectionDirty: false });

    const { onChange } = this.props;
    if (onChange) {
      onChange.apply(
        null,
        this.prepareParamsArguments({
          ...this.state,
          selectionDirty: false,
          pagination,
        }),
      );
    }
  };

  renderSelectionBox = type => {
    return (_, record, index) => {
      const rowKey = this.getRecordKey(record, index);
      const props = this.getCheckboxPropsByItem(record, index);
      const handleChange = e => {
        type === 'radio'
          ? this.handleRadioSelect(record, index, e)
          : this.handleSelect(record, index, e);
      };

      return (
        <span onClick={stopPropagation}>
          <SelectionBox
            type={type}
            store={this.store}
            rowIndex={rowKey}
            onChange={handleChange}
            defaultSelection={this.getDefaultSelection()}
            {...props}
          />
        </span>
      );
    };
  };

  getPopupContainer = () => {
    return ReactDOM.findDOMNode(this);
  };

  generatePopupContainerFunc = () => {
    const { scroll } = this.props;
    return scroll ? this.getPopupContainer : undefined;
  };

  renderRowSelection = (prefixCls, locale) => {
    const { rowSelection } = this.props;
    const columns = this.columns.concat();
    if (rowSelection) {
      const data = this.getFlatCurrentPageData().filter((item, index) => {
        if (rowSelection.getCheckboxProps) {
          return !this.getCheckboxPropsByItem(item, index).disabled;
        }
        return true;
      });
      const selectionColumnClass = classNames(`${prefixCls}-selection-column`, {
        [`${prefixCls}-selection-column-custom`]: rowSelection.selections,
      });
      const selectionColumn = {
        key: 'selection-column',
        render: this.renderSelectionBox(rowSelection.type),
        className: selectionColumnClass,
        fixed: rowSelection.fixed,
        width: rowSelection.columnWidth,
        title: rowSelection.columnTitle,
        [INTERNAL_COL_DEFINE]: {
          className: `${prefixCls}-selection-col`,
        },
      };
      if (rowSelection.type !== 'radio') {
        const checkboxAllDisabled = data.every(
          (item, index) => this.getCheckboxPropsByItem(item, index).disabled,
        );
        selectionColumn.title = selectionColumn.title || (
          <SelectionCheckboxAll
            store={this.store}
            locale={locale}
            data={data}
            getCheckboxPropsByItem={this.getCheckboxPropsByItem}
            getRecordKey={this.getRecordKey}
            disabled={checkboxAllDisabled}
            prefixCls={prefixCls}
            onSelect={this.handleSelectRow}
            selections={rowSelection.selections}
            hideDefaultSelections={rowSelection.hideDefaultSelections}
            getPopupContainer={this.generatePopupContainerFunc()}
          />
        );
      }
      if ('fixed' in rowSelection) {
        selectionColumn.fixed = rowSelection.fixed;
      } else if (columns.some(column => column.fixed === 'left' || column.fixed === true)) {
        selectionColumn.fixed = 'left';
      }
      if (columns[0] && columns[0].key === 'selection-column') {
        columns[0] = selectionColumn;
      } else {
        columns.unshift(selectionColumn);
      }
    }
    return columns;
  };

  getColumnKey = (column, index) => {
    return column.key || column.dataIndex || index;
  };

  getMaxCurrent = total => {
    const {
      pagination: { current, pageSize },
    } = this.state;
    if ((current - 1) * pageSize >= total) {
      return Math.floor((total - 1) / pageSize) + 1;
    }
    return current;
  };

  isSortColumn = column => {
    const { sortColumn } = this.state;
    if (!column || !sortColumn) return false;

    return this.getColumnKey(sortColumn) === this.getColumnKey(column);
  };

  renderColumnsDropdown = (prefixCls, dropdownPrefixCls, columns, locale) => {
    const { sortOrder, filters } = this.state;
    return treeMap(columns, (column, i) => {
      const key = this.getColumnKey(column, i);
      let filterDropdown;
      let sortButton;
      let onHeaderCell = column.onHeaderCell;
      const isSortColumn = this.isSortColumn(column);
      if ((column.filters && column.filters.length > 0) || column.filterDropdown) {
        const colFilters = key in filters ? filters[key] : [];
        filterDropdown = (
          <FilterDropdown
            locale={locale}
            column={column}
            selectedKeys={colFilters}
            confirmFilter={this.handleFilter}
            prefixCls={`${prefixCls}-filter`}
            dropdownPrefixCls={dropdownPrefixCls || 'ant-dropdown'}
            getPopupContainer={this.generatePopupContainerFunc()}
            key="filter-dropdown"
          />
        );
      }
      if (column.sorter) {
        const sortDirections = column.sortDirections || this.props.sortDirections;
        const isAscend = isSortColumn && sortOrder === 'ascend';
        const isDescend = isSortColumn && sortOrder === 'descend';

        const ascend = sortDirections.indexOf('ascend') !== -1 && (
          <Icon
            className={`${prefixCls}-column-sorter-up ${isAscend ? 'on' : 'off'}`}
            type="caret-up"
            theme="filled"
          />
        );

        const descend = sortDirections.indexOf('descend') !== -1 && (
          <Icon
            className={`${prefixCls}-column-sorter-down ${isDescend ? 'on' : 'off'}`}
            type="caret-down"
            theme="filled"
          />
        );

        sortButton = (
          <div
            title={locale.sortTitle}
            className={classNames(
              `${prefixCls}-column-sorter-inner`,
              ascend && descend && `${prefixCls}-column-sorter-inner-full`,
            )}
            key="sorter"
          >
            {ascend}
            {descend}
          </div>
        );

        onHeaderCell = col => {
          let colProps = {};
          // Get original first
          if (column.onHeaderCell) {
            colProps = { ...column.onHeaderCell(col) };
          }
          // Add sorter logic
          const onHeaderCellClick = colProps.onClick;
          colProps.onClick = (...args) => {
            this.toggleSortOrder(column);
            if (onHeaderCellClick) onHeaderCellClick(...args);
          };
          return colProps;
        };
      }
      return {
        ...column,
        className: classNames(column.className, {
          [`${prefixCls}-column-has-actions`]: sortButton || filterDropdown,
          [`${prefixCls}-column-has-filters`]: filterDropdown,
          [`${prefixCls}-column-has-sorters`]: sortButton,
          [`${prefixCls}-column-sort`]: isSortColumn && sortOrder,
        }),
        title: [
          <span key="title" className={`${prefixCls}-header-column`}>
            <div className={sortButton ? `${prefixCls}-column-sorters` : undefined}>
              <span className={`${prefixCls}-column-title`}>
                {this.renderColumnTitle(column.title)}
              </span>
              <span className={`${prefixCls}-column-sorter`}>{sortButton}</span>
            </div>
          </span>,
          filterDropdown,
        ],
        onHeaderCell,
      };
    });
  };

  renderColumnTitle = title => {
    const { filters, sortOrder } = this.state;
    return title instanceof Function ? title({ filters, sortOrder }) : title;
  };

  handleShowSizeChange = (current, pageSize) => {
    const { pagination } = this.state;
    pagination.onShowSizeChange(current, pageSize);
    const nextPagination = {
      ...pagination,
      pageSize,
      current,
    };
    this.setState({ pagination: nextPagination });

    const { onChange } = this.props;
    if (onChange) {
      onChange.apply(
        null,
        this.prepareParamsArguments({
          ...this.state,
          pagination: nextPagination,
        }),
      );
    }
  };

  renderPagination = (prefixCls, paginationPosition) => {
    if (!this.hasPagination()) return null;

    const { pagination } = this.state;
    const size = pagination.size
      ? pagination.size
      : this.props.size === 'middle' || this.props.size === 'small'
      ? 'small'
      : 'default';
    const position = pagination.position || 'bottom';
    const total = pagination.total || this.getLocalData().length;
    return total > 0 && (position === paginationPosition || position === 'both') ? (
      <Pagination
        key={`pagination-${paginationPosition}`}
        {...pagination}
        className={classNames(pagination.className, `${prefixCls}-pagination`)}
        onChange={this.handlePageChange}
        total={total}
        size={size}
        current={this.getMaxCurrent(total)}
        onShowSizeChange={this.handleShowSizeChange}
      />
    ) : null;
  };

  // Get pagination, filters, sorter
  prepareParamsArguments = state => {
    const pagination = { ...state.pagination };
    // remove useless handle function in Table.onChange
    delete pagination.onChange;
    delete pagination.onShowSizeChange;
    const filters = state.filters;
    const sorter = {};
    if (state.sortColumn && state.sortOrder) {
      sorter.column = state.sortColumn;
      sorter.order = state.sortOrder;
      sorter.field = state.sortColumn.dataIndex;
      sorter.columnKey = this.getColumnKey(state.sortColumn);
    }

    const extra = {
      currentDataSource: this.getLocalData(state),
    };

    return [pagination, filters, sorter, extra];
  };

  findColumn = myKey => {
    let column;
    treeMap(this.columns, c => {
      if (this.getColumnKey(c) === myKey) {
        column = c;
      }
    });
    return column;
  };

  handleFilter = (column, nextFilters) => {
    const props = this.props;
    const pagination = { ...this.state.pagination };
    const filters = {
      ...this.state.filters,
      [this.getColumnKey(column)]: nextFilters,
    };
    // Remove filters not in current columns
    const currentColumnKeys = [];
    treeMap(this.columns, c => {
      if (!c.children) currentColumnKeys.push(this.getColumnKey(c));
    });
    Object.keys(filters).forEach(columnKey => {
      if (currentColumnKeys.indexOf(columnKey) < 0) {
        delete filters[columnKey];
      }
    });

    if (props.pagination) {
      pagination.current = 1;
      pagination.onChange(pagination.current);
    }

    const newState = {
      pagination,
      filters: {},
    };
    const filtersToSetState = { ...filters };
    // Remove filters which is controlled
    this.getFilteredValueColumns().forEach(col => {
      const columnKey = this.getColumnKey(col);
      if (columnKey) {
        delete filtersToSetState[columnKey];
      }
    });
    if (Object.keys(filtersToSetState).length > 0) {
      newState.filters = filtersToSetState;
    }

    // Controlled current prop will not respond user interaction
    if (typeof props.pagination === 'object' && 'current' in props.pagination) {
      newState.pagination = {
        ...pagination,
        current: this.state.pagination.current,
      };
    }

    this.setState(newState, () => {
      this.store.setState({ selectionDirty: false });
      const { onChange } = this.props;
      if (onChange) {
        onChange.apply(
          null,
          this.prepareParamsArguments({
            ...this.state,
            selectionDirty: false,
            filters,
            pagination,
          }),
        );
      }
    });
  };

  getCurrentPageData = () => {
    let data = this.getLocalData();
    let current;
    let pageSize;
    const state = this.state;
    if (!this.hasPagination()) {
      pageSize = Number.MAX_VALUE;
      current = 1;
    } else {
      pageSize = state.pagination.pageSize;
      current = this.getMaxCurrent(state.pagination.total || data.length);
    }

    if (data.length > pageSize || pageSize === Number.MAX_VALUE) {
      data = data.filter(
        (_, dataIndex) => dataIndex >= (current - 1) * pageSize && dataIndex < current * pageSize,
      );
    }
    return data;
  };

  getFlatCurrentPageData = () => {
    const { childrenColumnName } = this.props;
    return flatArray(this.getCurrentPageData(), childrenColumnName);
  };

  recursiveSort = (data, sorterFn) => {
    const { childrenColumnName = 'children' } = this.props;
    return data.sort(sorterFn).map(item =>
      item[childrenColumnName]
        ? {
            ...item,
            [childrenColumnName]: this.recursiveSort(item[childrenColumnName], sorterFn),
          }
        : item,
    );
  };

  getLocalData = (state, filter = true) => {
    const currentState = state || this.state;
    const { dataSource } = this.props;
    let data = dataSource || [];

    data = data.slice(0);
    const sorterFn = this.getSorterFn(currentState);
    if (sorterFn) {
      data = this.recursiveSort(data, sorterFn);
    }

    if (filter && currentState.filters) {
      Object.keys(currentState.filters).forEach(columnKey => {
        const col = this.findColumn(columnKey);
        if (!col) return;

        const values = currentState.filters[columnKey] || [];
        if (values.length === 0) return;

        const onFilter = col.onFilter;
        data = onFilter ? data.filter(record => values.some(v => onFilter(v, record))) : data;
      });
    }
    return data;
  };

  createComponents = (components = {}, prevComponents) => {
    const bodyRow = components && components.body && components.body.row;
    const preBodyRow = prevComponents && prevComponents.body && prevComponents.body.row;
    if (!this.row || bodyRow !== preBodyRow) {
      this.row = createBodyRow(bodyRow);
    }
    this.components = {
      ...components,
      body: {
        ...components.body,
        row: this.row,
      },
    };
  };

  renderTable = (prefixCls, renderEmpty, dropdownPrefixCls, contextLocale) => {
    const { style, className, showHeader, locale, ...restProps } = this.props;
    const data = this.getCurrentPageData();
    const expandIconAsCell = this.props.expandedRowRender && this.props.expandIconAsCell !== false;

    const mergedLocale = { ...contextLocale, ...locale };
    if (!locale || !locale.emptyText) {
      mergedLocale.emptyText = renderEmpty('Table');
    }

    const classString = classNames({
      [`${prefixCls}-${this.props.size}`]: true,
      [`${prefixCls}-bordered`]: this.props.bordered,
      [`${prefixCls}-empty`]: !data.length,
      [`${prefixCls}-without-column-header`]: !showHeader,
    });

    let columns = this.renderRowSelection(prefixCls, mergedLocale);
    columns = this.renderColumnsDropdown(prefixCls, dropdownPrefixCls, columns, mergedLocale);
    columns = columns.map((column, i) => ({
      ...column,
      key: this.getColumnKey(column, i),
    }));
    let expandIconColumnIndex = columns[0] && columns[0].key === 'selection-column' ? 1 : 0;
    if ('expandIconColumnIndex' in restProps) {
      expandIconColumnIndex = restProps.expandIconColumnIndex;
    }

    return (
      <RcTable
        key="table"
        {...restProps}
        onRow={(record, index) => this.onRow(prefixCls, record, index)}
        components={this.components}
        prefixCls={prefixCls}
        data={data}
        columns={columns}
        showHeader={showHeader}
        className={classString}
        expandIconColumnIndex={expandIconColumnIndex}
        expandIconAsCell={expandIconAsCell}
        emptyText={mergedLocale.emptyText}
      />
    );
  };

  renderComponent = ({ getPrefixCls, renderEmpty }) => {
    const {
      prefixCls: customizePrefixCls,
      dropdownPrefixCls: customizeDropdownPrefixCls,
      style,
      className,
    } = this.props;
    const data = this.getCurrentPageData();

    let loading = this.props.loading;
    if (typeof loading === 'boolean') {
      loading = {
        spinning: loading,
      };
    }

    const prefixCls = getPrefixCls('table', customizePrefixCls);
    const dropdownPrefixCls = getPrefixCls('dropdown', customizeDropdownPrefixCls);
    const table = (
      <LocaleReceiver componentName="Table" defaultLocale={defaultLocale.Table}>
        {locale => this.renderTable(prefixCls, renderEmpty, dropdownPrefixCls, locale)}
      </LocaleReceiver>
    );

    // if there is no pagination or no data,
    // the height of spin should decrease by half of pagination
    const paginationPatchClass =
      this.hasPagination() && data && data.length !== 0
        ? `${prefixCls}-with-pagination`
        : `${prefixCls}-without-pagination`;

    return (
      <div className={classNames(`${prefixCls}-wrapper`, className)} style={style}>
        <Spin
          {...loading}
          className={loading.spinning ? `${paginationPatchClass} ${prefixCls}-spin-holder` : ''}
        >
          {this.renderPagination(prefixCls, 'top')}
          {table}
          {this.renderPagination(prefixCls, 'bottom')}
        </Spin>
      </div>
    );
  };

  render() {
    const { theme } = this.props;
    return <div className={styles[`theme-${theme}`]}>{this.renderComponent}</div>;
  }
}
