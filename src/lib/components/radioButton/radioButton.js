import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './radioButton.module.scss';

export default class RadioButton extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    onChangeFunction: PropTypes.func,
    options: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.string,
      text: PropTypes.string,
    })),
    value: PropTypes.string,
  };

  static defaultProps = {
    className: '',
    value: null,
    // eslint-disable-next-line no-unused-vars
    onChangeFunction: (name, value) => { },
  }

  state = {
    checkboxValue: true,
  }

  handleFieldChange = (e) => {
    const { onChangeFunction, name } = this.props;
    onChangeFunction(name, e.target.value);
  }

  render() {
    const {
      className,
      name,
      value,
      options,
    } = this.props;

    return (
      <div className={`${className} ${styles.radioButtonContainer}`}>
        {options.map(item => (
          <div key={item.value}>
            <input
              id={item.value}
              type="radio"
              name={name}
              value={item.value}
              checked={item.value === value}
              onChange={this.handleFieldChange}
            />
            <label htmlFor={item.value}>{item.text}</label>
          </div>
        ))}
      </div>
    );
  }
}
