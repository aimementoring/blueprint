import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RcTable from 'rc-table';
import { componentPropTypes, defaultComponentPropTypes } from '../../utils/componentPropTypes';
import styles from './table.module.scss';

const columnShape = {
  key: PropTypes.string,
  className: PropTypes.string,
  colSpan: PropTypes.number,
  title: PropTypes.string,
  dataIndex: PropTypes.string,
  width: PropTypes.number,
  fixed: PropTypes.oneOfType([PropTypes.oneOf(['left', 'right']), PropTypes.bool]),
  align: PropTypes.string,
  onCell: PropTypes.func,
  onHeaderCell: PropTypes.func,
  render: PropTypes.func,
  onCellClick: PropTypes.func,
};

export default class Table extends PureComponent {
  static propTypes = {
    ...componentPropTypes,
    header: PropTypes.node,
    footer: PropTypes.node,
    columns: PropTypes.arrayOf(PropTypes.shape(columnShape)),
    data: PropTypes.array,
    rowKey: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    rowClassName: PropTypes.string,
    emptyText: PropTypes.string,
  };

  static defaultProps = {
    ...defaultComponentPropTypes,
    header: null,
    footer: null,
    columns: [],
    data: [],
    rowKey: 'id',
    rowClassName: '',
    emptyText: 'No data available',
  };

  render() {
    const {
      theme,
      header,
      footer,
      columns,
      data,
      rowKey,
      rowClassName,
      emptyText,
      containerClassName,
      className,
    } = this.props;

    return (
      <div className={styles[`theme-${theme}`]}>
        <div className={containerClassName}>
          {header && <div className={styles.headerContainer}>{header}</div>}
          <div className={styles.tableContainer}>
            <RcTable
              className={className}
              columns={columns}
              data={data}
              rowKey={rowKey}
              rowClassName={rowClassName}
              emptyText={emptyText}
            />
          </div>
          {footer && <div className={styles.footerContainer}>{footer}</div>}
        </div>
      </div>
    );
  }
}
