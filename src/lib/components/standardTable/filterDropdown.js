import React from 'react';
import ReactDOM from 'react-dom';
import { polyfill } from 'react-lifecycles-compat';
import Menu, { SubMenu, Item as MenuItem } from 'rc-menu';
import closest from 'dom-closest';
import classNames from 'classnames';
import shallowequal from 'shallowequal';
import Dropdown from '../dropdown';
import Icon from '../icon';
import Checkbox from '../checkbox';
import Radio from '../radio';
import FilterDropdownMenuWrapper from './FilterDropdownMenuWrapper';
import { FilterMenuProps, FilterMenuState, ColumnProps, ColumnFilterItem } from './interface';
import { generateValueMaps } from './util';

const stopPropagation = e => {
  e.stopPropagation();
  if (e.nativeEvent.stopImmediatePropagation) {
    e.nativeEvent.stopImmediatePropagation();
  }
};

class FilterMenu extends React.Component {
  static defaultProps = {
    handleFilter() {},
    column: {},
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    const { column } = nextProps;
    const { prevProps } = prevState;

    const newState = {
      prevProps: nextProps,
    };

    if (
      'selectedKeys' in nextProps &&
      !shallowequal(prevProps.selectedKeys, nextProps.selectedKeys)
    ) {
      newState.selectedKeys = nextProps.selectedKeys;
    }
    if (!shallowequal((prevProps.column || {}).filters, (nextProps.column || {}).filters)) {
      newState.valueKeys = generateValueMaps(nextProps.column.filters);
    }
    if ('filterDropdownVisible' in column) {
      newState.visible = !!column.filterDropdownVisible;
    }
    return newState;
  }

  neverShown;

  constructor(props) {
    super(props);

    const visible =
      'filterDropdownVisible' in props.column ? props.column.filterDropdownVisible : false;

    this.state = {
      selectedKeys: props.selectedKeys,
      valueKeys: generateValueMaps(props.column.filters),
      keyPathOfSelectedItem: {},
      visible,
      prevProps: props,
    };
  }

  componentDidMount() {
    const { column } = this.props;
    this.setNeverShown(column);
  }

  componentDidUpdate() {
    const { column } = this.props;
    this.setNeverShown(column);
  }

  getDropdownVisible = () => {
    return this.neverShown ? false : this.state.visible;
  };

  setNeverShown = column => {
    const rootNode = ReactDOM.findDOMNode(this);
    const filterBelongToScrollBody = !!closest(rootNode, `.ant-table-scroll`);
    if (filterBelongToScrollBody) {
      this.neverShown = !!column.fixed;
    }
  };

  setSelectedKeys = ({ selectedKeys }) => {
    this.setState({ selectedKeys });
  };

  setVisible = visible => {
    const { column } = this.props;
    if (!('filterDropdownVisible' in column)) {
      this.setState({ visible });
    }
    if (column.onFilterDropdownVisibleChange) {
      column.onFilterDropdownVisibleChange(visible);
    }
  };

  handleClearFilters = () => {
    this.setState({ selectedKeys: [] }, this.handleConfirm);
  };

  handleConfirm = () => {
    this.setVisible(false);
    this.setState({}, this.confirmFilter);
  };

  onVisibleChange = visible => {
    this.setVisible(visible);
    if (!visible) this.confirmFilter();
  };

  confirmFilter = () => {
    const { selectedKeys, valueKeys } = this.state;
    const { filterDropdown } = this.props.column;

    if (!shallowequal(selectedKeys, this.props.selectedKeys)) {
      this.props.confirmFilter(
        this.props.column,
        filterDropdown ? selectedKeys : selectedKeys.map(key => valueKeys[key]),
      );
    }
  };

  renderMenuItem = item => {
    const { column } = this.props;
    const { selectedKeys } = this.state;
    const multiple = 'filterMultiple' in column ? column.filterMultiple : true;

    // We still need trade key as string since Menu render need string
    const internalSelectedKeys = (selectedKeys || []).map(key => key.toString());

    const input = multiple ? (
      <Checkbox checked={internalSelectedKeys.indexOf(item.value.toString()) >= 0} />
    ) : (
      <Radio checked={internalSelectedKeys.indexOf(item.value.toString()) >= 0} />
    );

    return (
      <MenuItem key={item.value}>
        {input}
        <span>{item.text}</span>
      </MenuItem>
    );
  };

  hasSubMenu = () => {
    const {
      column: { filters = [] },
    } = this.props;
    return filters.some(item => !!(item.children && item.children.length > 0));
  };

  renderMenus = items => {
    return items.map(item => {
      if (item.children && item.children.length > 0) {
        const { keyPathOfSelectedItem } = this.state;
        const containSelected = Object.keys(keyPathOfSelectedItem).some(
          key => keyPathOfSelectedItem[key].indexOf(item.value) >= 0,
        );
        const subMenuCls = containSelected
          ? `${this.props.dropdownPrefixCls}-submenu-contain-selected`
          : '';
        return (
          <SubMenu title={item.text} className={subMenuCls} key={item.value.toString()}>
            {this.renderMenus(item.children)}
          </SubMenu>
        );
      }
      return this.renderMenuItem(item);
    });
  };

  handleMenuItemClick = ({ keyPath, key }) => {
    const { selectedKeys } = this.state;
    if (!keyPath || keyPath.length <= 1) {
      return;
    }
    const keyPathOfSelectedItem = this.state.keyPathOfSelectedItem;
    if (selectedKeys && selectedKeys.indexOf(key) >= 0) {
      // deselect SubMenu child
      delete keyPathOfSelectedItem[key];
    } else {
      // select SubMenu child
      keyPathOfSelectedItem[key] = keyPath;
    }
    this.setState({ keyPathOfSelectedItem });
  };

  renderFilterIcon = () => {
    const { column, locale, prefixCls, selectedKeys } = this.props;
    const filtered = selectedKeys && selectedKeys.length > 0;
    let filterIcon = column.filterIcon;
    if (typeof filterIcon === 'function') {
      filterIcon = filterIcon(filtered);
    }

    const dropdownIconClass = classNames({
      [`${prefixCls}-selected`]: filtered,
      [`${prefixCls}-open`]: this.getDropdownVisible(),
    });

    return filterIcon ? (
      React.cloneElement(filterIcon, {
        title: locale.filterTitle,
        className: classNames(`${prefixCls}-icon`, dropdownIconClass, filterIcon.props.className),
        onClick: stopPropagation,
      })
    ) : (
      <Icon
        title={locale.filterTitle}
        type="filter"
        theme="filled"
        className={dropdownIconClass}
        onClick={stopPropagation}
      />
    );
  };

  render() {
    const { selectedKeys: originSelectedKeys } = this.state;
    const { column, locale, prefixCls, dropdownPrefixCls, getPopupContainer } = this.props;
    // default multiple selection in filter dropdown
    const multiple = 'filterMultiple' in column ? column.filterMultiple : true;
    const dropdownMenuClass = classNames({
      [`${dropdownPrefixCls}-menu-without-submenu`]: !this.hasSubMenu(),
    });
    let { filterDropdown } = column;
    if (filterDropdown instanceof Function) {
      filterDropdown = filterDropdown({
        prefixCls: `${dropdownPrefixCls}-custom`,
        setSelectedKeys: selectedKeys => this.setSelectedKeys({ selectedKeys }),
        selectedKeys: originSelectedKeys,
        confirm: this.handleConfirm,
        clearFilters: this.handleClearFilters,
        filters: column.filters,
        getPopupContainer: triggerNode => triggerNode.parentNode,
      });
    }

    const menus = filterDropdown ? (
      <FilterDropdownMenuWrapper className={`${prefixCls}-dropdown`}>
        {filterDropdown}
      </FilterDropdownMenuWrapper>
    ) : (
      <FilterDropdownMenuWrapper className={`${prefixCls}-dropdown`}>
        <Menu
          multiple={multiple}
          onClick={this.handleMenuItemClick}
          prefixCls={`${dropdownPrefixCls}-menu`}
          className={dropdownMenuClass}
          onSelect={this.setSelectedKeys}
          onDeselect={this.setSelectedKeys}
          selectedKeys={originSelectedKeys && originSelectedKeys.map(val => val.toString())}
          getPopupContainer={triggerNode => triggerNode.parentNode}
        >
          {this.renderMenus(column.filters)}
        </Menu>
        <div className={`${prefixCls}-dropdown-btns`}>
          <a className={`${prefixCls}-dropdown-link confirm`} onClick={this.handleConfirm}>
            {locale.filterConfirm}
          </a>
          <a className={`${prefixCls}-dropdown-link clear`} onClick={this.handleClearFilters}>
            {locale.filterReset}
          </a>
        </div>
      </FilterDropdownMenuWrapper>
    );

    return (
      <Dropdown
        trigger={['click']}
        placement="bottomRight"
        overlay={menus}
        visible={this.getDropdownVisible()}
        onVisibleChange={this.onVisibleChange}
        getPopupContainer={getPopupContainer}
        forceRender
      >
        {this.renderFilterIcon()}
      </Dropdown>
    );
  }
}

polyfill(FilterMenu);

export default FilterMenu;
