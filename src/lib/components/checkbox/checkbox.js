import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { componentPropTypes, defaultComponentPropTypes } from '../../utils/componentPropTypes';
import styles from './checkbox.module.scss';

export default class Checkbox extends PureComponent {
  static propTypes = {
    ...componentPropTypes,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    customId: PropTypes.string,
    onChangeFunction: PropTypes.func,
    value: PropTypes.bool,
    extraParamResponse: PropTypes.string,
  };

  static defaultProps = {
    ...defaultComponentPropTypes,
    onChangeFunction: () => {},
    value: false,
    extraParamResponse: '',
  };

  handleFieldChange = e => {
    e.preventDefault();
    const { onChangeFunction, name, extraParamResponse, value } = this.props;
    onChangeFunction(name, !value, extraParamResponse);
  };

  render() {
    const { className, placeholder, name, customId, value, theme } = this.props;

    return (
      <div className={styles[`theme-${theme}`]}>
        <div
          className={`${className} ${styles.customCheckbox} ${styles.customCheckboxDefault}`}
          onClick={this.handleFieldChange}
        >
          <input type="hidden" name={name} value="no" />
          <input
            id={customId}
            type="checkbox"
            className="hide"
            name={name}
            value="yes"
            readOnly
            checked={value}
          />
          <label htmlFor={customId}>{placeholder}</label>
        </div>
      </div>
    );
  }
}
