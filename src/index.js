import React, { Component } from 'react';
import { render } from 'react-dom';
import { Components, Utils } from './lib';
// import { validateEmail, maxCharacters, minCharacters, required } from './lib/utils/validation';

const {
  Input,
  Button,
  Checkbox,
  TextBox,
  Select,
} = Components;

const {
  validateEmail,
  minCharacters,
  required,
  maxCharacters,
} = Utils.Validation;

const container = document.getElementById('root');
class App extends Component {
  state = {
    input: {
      placeholder: 'Name',
      value: '',
      type: 'text',
      required: true,
      disabled: false,
      validationMessage: '',
    },
    textbox: {
      placeholder: 'Textbox',
      value: '',
      type: 'text',
      required: true,
      disabled: false,
    },
    checkbox: {
      value: false,
    },
  };

  handleInputChange = (attribute, event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.updateState(attribute, target.name, value);
  };

  updateState = (mainAttribute, attribute, value) => {
    const originalValue = this.state[mainAttribute];
    this.setState({
      [mainAttribute]: {
        ...originalValue,
        [attribute]: value,
      },
    });
  };

  getSelectStyles = () => {
    return {
      control: {
        minHeight: '60px',
        border: 'none',
      },
      input: {
        fontFamily: 'Poppins',
      },
      singleValue: {
        fontFamily: 'Poppins',
      },
      menu: {
        fontFamily: 'Poppins',
      },
      menuList: {
        fontFamily: 'Poppins',
      },
    }
  }

  renderInputComponent = () => {
    const { input } = this.state;

    return (
      <div>
        <h1>Input component</h1>
        <h4>Attributes:</h4>
        <div>
          placeholder:
          <input
            type="text"
            value={input.placeholder}
            onChange={e => this.handleInputChange('input', e)}
            name="placeholder"
          />
          <br />
          type:
          <input
            type="text"
            value={input.type}
            onChange={e => this.handleInputChange('input', e)}
            name="type"
          />
          <br />
          required:
          <input
            type="checkbox"
            checked={input.required}
            onChange={e => this.handleInputChange('input', e)}
            name="required"
          />
          <br />
          disabled:
          <input
            type="checkbox"
            checked={input.disabled}
            onChange={e => this.handleInputChange('input', e)}
            name="disabled"
          />
          <br />
          error message:
          <input
            type="text"
            value={input.validationMessage}
            onChange={e => this.handleInputChange('input', e)}
            name="validationMessage"
          />
          <br />
          value: {input.value}
          <br />
        </div>
        <Select
          options={[
            { value: 'Australia', label: 'Australia' },
            { value: 'Uganda', label: 'Uganda' },
            { value: 'South Africa', label: 'South Africa' },
          ]}
          value="Australia"
          placeholder="Select a country"
          onChangeFunction={() => { }}
          error={true}
          validationMessage="is Required"
          name="countrySelected"
          styles={this.getSelectStyles()}
        />
        <Input
          {...input}
          name="value"
          onChangeFunction={(attr, value) => this.updateState('input', attr, value)}
          validations={[required, validateEmail, maxCharacters(10)]}
        />


        <br />
      </div>
    );
  };

  renderTextboxComponent = () => {
    const { textbox } = this.state;
    return (
      <TextBox
        {...textbox}
        name="value"
        onChangeFunction={(attr, value) => this.updateState('textbox', attr, value)}
        validations={[maxCharacters(100), minCharacters(10)]}
      />
    );
  };

  renderButtonComponent = () => {
    return (
      <div>
        <h1>Button component</h1>
        <Button type="button" onClickFunction={() => { }} text="Back" />
      </div>
    );
  };

  renderCheckboxComponent = () => {
    const { checkbox } = this.state;
    return (
      <div>
        <h1>Checkbox component</h1>
        <Checkbox
          elementClassName="classname"
          handleFieldChange={(name, value) => this.updateState(name, 'value', value)}
          placeholder="Accept terms and conditions"
          name="checkbox"
          customId="checkbox"
          value={checkbox.value}
          validationMessage="is Required"
        />
      </div>
    );
  };

  render() {
    return (
      <div>
        {this.renderInputComponent()}
        {this.renderButtonComponent()}
        {this.renderCheckboxComponent()}
        {this.renderTextboxComponent()}
      </div>
    );
  }
}

render(<App />, container);

export { Button, Checkbox, Input };
