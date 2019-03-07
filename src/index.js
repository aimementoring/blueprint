import React, { Component } from 'react';
import { render } from 'react-dom';
import { Components } from './lib';

const { Input, Button, Checkbox } = Components;

const container = document.getElementById('root');
class App extends Component {
  state = {
    input: {
      placeholder: 'Name',
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
          value: {input.value}
          <br />
        </div>
        <Input
          {...input}
          name="value"
          onChangeFunction={(attr, value) => this.updateState('input', attr, value)}
        />
      </div>
    );
  };

  renderButtonComponent = () => {
    return (
      <div>
        <h1>Button component</h1>
        <Button type="button" onClickFunction={() => {}} text="Back" />
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
          labeltext="Accept terms and conditions"
          name="checkbox"
          customId="checkbox"
          value={checkbox.value}
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
      </div>
    );
  }
}

render(<App />, container);

export { Button, Checkbox, Input };
