import React from 'react';
import classnames from 'classnames';
import omit from 'omit.js';

const createTableRow = (Component = 'tr') => {
  class BodyRow extends React.Component {
    store;
    unsubscribe;

    constructor(props) {
      super(props);

      this.store = props.store;
      const { selectedRowKeys } = this.store.getState();

      this.state = {
        selected: selectedRowKeys.indexOf(props.rowKey) >= 0,
      };
    }

    componentDidMount() {
      this.subscribe();
    }

    componentWillUnmount() {
      if (this.unsubscribe) {
        this.unsubscribe();
      }
    }

    subscribe = () => {
      const { store, rowKey } = this.props;
      this.unsubscribe = store.subscribe(() => {
        const { selectedRowKeys } = this.store.getState();
        const selected = selectedRowKeys.indexOf(rowKey) >= 0;
        if (selected !== this.state.selected) {
          this.setState({ selected });
        }
      });
    };

    render() {
      const rowProps = omit(this.props, ['prefixCls', 'rowKey', 'store']);
      const className = classnames(this.props.className, {
        [`${this.props.prefixCls}-row-selected`]: this.state.selected,
      });

      return React.createElement(
        Component,
        {
          ...rowProps,
          className,
        },
        this.props.children,
      );
    }
  }

  return BodyRow;
};

export default createTableRow;
