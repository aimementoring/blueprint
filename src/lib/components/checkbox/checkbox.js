import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './checkbox.module.scss';

export default class Checkbox extends PureComponent {
  static propTypes = {
    elementClassName: PropTypes.string,
    labeltext: PropTypes.string,
    name: PropTypes.string,
    customId: PropTypes.string,
    handleFieldChange: PropTypes.func,
    value: PropTypes.bool,
    extraParamResponse: PropTypes.string,
  };

  static defaultProps = {
    elementClassName: '',
    handleFieldChange: () => {},
    value: false,
    extraParamResponse: '',
  };

  handleFieldChange = e => {
    e.preventDefault();
    const { handleFieldChange, name, extraParamResponse, value } = this.props;
    handleFieldChange(name, !value, extraParamResponse);
  };

  render() {
    const { elementClassName, labeltext, name, customId, value } = this.props;

    return (
      <div
        className={`${elementClassName} ${styles.customCheckbox} ${styles.customCheckboxDefault}`}
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
        <label htmlFor={customId}>{labeltext}</label>
      </div>
    );
  }
}
