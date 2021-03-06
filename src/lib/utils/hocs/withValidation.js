import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { checkValidations } from '../validation';
import styles from './withValidation.module.scss';

export default function withValidation(WrappedComponent) {
  return class extends React.Component {
    static propTypes = {
      validations: PropTypes.array,
      validationMessage: PropTypes.string,
      theme: PropTypes.string,
      hasErrorAfterSubmit: PropTypes.bool,
    };

    static defaultProps = {
      theme: 'purple',
      validations: [],
      validationMessage: '',
    };

    constructor(props) {
      super(props);
      this.state = {
        validationMessage: '',
        value: '',
      };
    }

    static getDerivedStateFromProps(props, state) {
      if (
        props.validationMessage !== state.validationMessage ||
        (props.hasErrorAfterSubmit && !state.validationMessage)
      ) {
        return {
          validationMessage:
            props.validationMessage ||
            checkValidations(props.validations, props.value),
        };
      }

      // Return null if the state hasn't changed
      return null;
    }

    handleValidations = value => {
      const { validations } = this.props;
      const validationResultMsg = checkValidations(validations, value);
      this.setState({
        validationMessage:
          validationResultMsg || this.props.validationMessage || '',
        value,
      });
      return validationResultMsg || this.props.validationMessage;
    };

    getValidationMessage = () => this.state.validationMessage;

    hasValidationError = () => !!this.state.validationMessage;

    renderValidationError = (customStyle = '') =>
      this.hasValidationError() && (
        <span
          className={classNames(
            styles[`theme-${this.props.theme}`],
            customStyle,
          )}
        >
          <span className={styles.errorMessage}>
            {this.getValidationMessage()}
          </span>
        </span>
      );

    render() {
      return (
        <WrappedComponent
          handleValidations={this.handleValidations}
          hasValidationError={this.hasValidationError}
          getValidationMessage={this.getValidationMessage}
          renderValidationError={this.renderValidationError}
          {...this.props}
        />
      );
    }
  };
}
