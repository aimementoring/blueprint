import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import IntlTelInput from 'react-intl-tel-input';
import { componentPropTypes, defaultComponentPropTypes } from '../../utils/componentPropTypes';
import styles from './phoneInput.module.scss';

export default class PhoneInput extends PureComponent {
  static propTypes = {
    ...componentPropTypes,
    placeholder: PropTypes.string,
    currentSite: PropTypes.string.isRequired,
    name: PropTypes.string,
    required: PropTypes.bool,
    defaultCountry: PropTypes.string,
    value: PropTypes.string,
    onChangeFunction: PropTypes.func,
    onCountrySelected: PropTypes.func,
  };

  static defaultProps = {
    ...defaultComponentPropTypes,
    placeholder: 'phone',
    className: styles.input,
    name: 'phone',
    required: false,
    defaultCountry: 'auto',
    value: '',
    onCountrySelected: () => { },
    onChangeFunction: () => { },
  };

  lookupGeoIp = callback => {
    callback(this.props.currentSite);
  };

  handleChange = (status, value) => {
    const { name, onChangeFunction } = this.props;
    onChangeFunction(name, value);
  };

  render() {
    const {
      containerClassName,
      required,
      defaultCountry,
      name,
      value,
      onCountrySelected,
      className,
      theme,
      placeholder,
    } = this.props;

    return (
      <div className={styles[`theme-${theme}`]}>
        <div className={`${containerClassName} ${styles.inputWrapper}`}>
          <IntlTelInput
            inputClassName={className}
            value={value}
            fieldName={name}
            defaultCountry={defaultCountry}
            autoPlaceholder={true}
            geoIpLookup={this.lookupGeoIp}
            utilsScript="libphonenumber.js"
            onPhoneNumberChange={this.handleChange}
            onSelectFlag={onCountrySelected}
            type="number"
            telInputProps={{ required }}
            placeholder={placeholder}
            separateDialCode={true}
            format={true}
            style={{ width: '100%' }}
          />
        </div>
      </div>
    );
  }
}
