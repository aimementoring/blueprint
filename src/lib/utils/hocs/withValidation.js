import React from 'react';
import PropTypes from 'prop-types';
import { checkValidations } from '../validation';

export default function withValidation(WrappedComponent) {
  // ...and returns another component...
  return class extends React.Component {
    static propTypes = {
      validations: PropTypes.array,
      onValidationFail: PropTypes.func,
    };

    static defaultProps = {
      validations: [],
      onValidationFail: () => { },
    };

    constructor(props) {
      super(props);
      this.state = {
        validatedOk: true,
        validationMessage: '',
      };
    }

    handleValidations = (value) => {
      const { validations, onValidationFail } = this.props;
      const validationResultMsg = checkValidations(validations, value);
      if (validationResultMsg) {
        this.setState({ validatedOk: false, validationMessage: validationResultMsg });
        onValidationFail(name);
      } else {
        this.setState({ validatedOk: true, validationMessage: '' });
      }
    }

    render() {
      const { validatedOk, validationMessage } = this.state;
      // ... and renders the wrapped component with the fresh data!
      // Notice that we pass through any additional props
      return (
        <div>
          <WrappedComponent
            handleValidations={this.handleValidations}
            data={this.state.data}
            validatedOk={validatedOk}
            validationMessage={validationMessage}
            {...this.props}
          />
          {!validatedOk && <span>{validationMessage}</span>}
        </div>
      );
    }
  };
}
