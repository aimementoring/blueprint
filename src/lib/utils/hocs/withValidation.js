import React from 'react';
import PropTypes from 'prop-types';
import { checkValidations } from '../validation';
import styles from './withValidation.module.scss';

export default function withValidation(WrappedComponent) {
  return class extends React.Component {
    static propTypes = {
      validations: PropTypes.array,
      validationMessage: PropTypes.string,
      theme: PropTypes.string,
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
      if (props.validationMessage !== state.validationMessage) {
        return {
          validationMessage: props.validationMessage || checkValidations(props.validations, state.value),
        };
      }

      // Return null if the state hasn't changed
      return null;
    }

    handleValidations = (value) => {
      const { validations } = this.props;
      const validationResultMsg = checkValidations(validations, value);

      this.setState({
        validationMessage: validationResultMsg || this.props.validationMessage || '',
        value,
      });
      return (validationResultMsg || this.props.validationMessage);
    }

    isValidationOk = () => !!this.state.validationMessage;

    render() {
      const { validationMessage } = this.state;
      return (
        <div className={styles[`theme-${this.props.theme}`]}>
          <WrappedComponent
            handleValidations={this.handleValidations}
            isValidationOk={this.isValidationOk}
            {...this.props}
          />
          {validationMessage &&
            <span className={styles.error}>{validationMessage}</span>}
        </div>
      );
    }
  };
}
