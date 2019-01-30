import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';
import styles from './phoneInput.module.scss';

/**
 * @component
 */
export default class PhoneInput extends PureComponent {
  static propTypes = {
    currentSite: PropTypes.string.isRequired,
    elementClassName: PropTypes.string,
    name: PropTypes.string,
    required: PropTypes.bool,
    defaultCountry: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onChangeFunction: PropTypes.func,
    onCountrySelected: PropTypes.func,
  };

  static defaultProps = {
    elementClassName: '',
    name: 'phone',
    placeholder: 'Phone number',
    required: false,
    defaultCountry: 'auto',
    value: '',
    onCountrySelected: () => {},
    onChangeFunction: () => {},
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
      elementClassName,
      required,
      defaultCountry,
      name,
      value,
      onCountrySelected,
      placeholder,
    } = this.props;

    return (
      <div className={`${elementClassName} ${styles.inputWrapper}`}>
        <IntlTelInput
          value={value}
          fieldName={name}
          defaultCountry={defaultCountry}
          placeholder={placeholder}
          autoPlaceholder={true}
          geoIpLookup={this.lookupGeoIp}
          css={['intl-tel-input w100', styles.input]}
          utilsScript="libphonenumber.js"
          onPhoneNumberChange={this.handleChange}
          onSelectFlag={onCountrySelected}
          type="number"
          telInputProps={{ required }}
          separateDialCode={true}
          format={true}
          style={{ width: '100%' }}
        />
      </div>
    );
  }
}
