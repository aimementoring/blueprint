import React, { Component } from 'react';
import { render } from 'react-dom';
import { Components, Utils } from './lib';

const { Input, Button, Checkbox, Textarea, Select, TermsAndConditions } = Components;

const { validateEmail, minCharacters, required, maxCharacters, validDate } = Utils.Validation;

class App extends Component {
  state = {
    input: {
      placeholder: 'Name',
      value: '',
      type: 'text',
      required: true,
      disabled: false,
      validationMessage: 'there is an error here',
      theme: 'purple',
    },
    textarea: {
      placeholder: 'Textarea',
      value: '',
      type: 'text',
      required: true,
      disabled: false,
    },
    checkbox: {
      value: true,
    },
    terms: false,
    date: '',
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

  updateDate = value => this.setState({ date: value });

  updateTermsAndConditions = value => this.setState({ terms: value });

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
    };
  };

  renderInputComponent = () => {
    const { input } = this.state;

    return (
      <div>
        <h1>Input component</h1>
        <h4>Attributes:</h4>
        <div>
          theme:
          <input
            type="text"
            value={input.theme}
            onChange={e => this.handleInputChange('input', e)}
            name="theme"
          />
          <br />
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
            theme={input.theme}
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
          onChangeFunction={() => {}}
          error={true}
          validationMessage="is Required"
          name="countrySelected"
          styles={this.getSelectStyles()}
        />
        <Input
          {...input}
          name="value"
          theme={input.theme}
          onChangeFunction={(attr, value) => this.updateState('input', attr, value)}
          validations={[required, validateEmail, maxCharacters(10)]}
        />

        <Input
          placeholder="date"
          type="date"
          name="value"
          theme={input.theme}
          onChangeFunction={(attr, value) => this.updateDate(value)}
          value={this.state.date}
          validations={[required, validDate, maxCharacters(10)]}
        />

        <Input
          placeholder="text"
          type="text"
          name="value"
          theme={input.theme}
          onChangeFunction={(attr, value) => this.updateDate(value)}
          value={this.state.date}
          validations={[required, validDate, maxCharacters(10)]}
        />
        <TermsAndConditions
          checkboxLabel="Testing my checkbox"
          onChange={(name, value) => this.updateTermsAndConditions(value)}
          height={150}
          value={this.state.terms}
          name="terms"
        >
          <strong>Lorem ipsum dolor sit amet</strong>
          <p>
            {`consectetur adipiscing elit. Nullam vitae augue commodo, euismod erat in, mollis diam. Suspendisse tristique justo sem, id commodo lectus porttitor et. In tempus libero lacus. Proin viverra facilisis ultricies. Phasellus aliquet efficitur ante, ac dignissim velit sollicitudin eu. Curabitur non nunc dictum, eleifend ligula feugiat, convallis augue. Ut accumsan arcu ac lobortis lacinia. Donec vulputate ligula vel elit maximus, non eleifend lorem sagittis. Praesent dapibus ante ac lectus fermentum blandit.\n
            Duis mollis dignissim elit eget rhoncus. Sed consectetur metus et ipsum sodales, non lacinia nulla varius. Curabitur dictum fringilla tellus, eu feugiat urna convallis nec. Donec at massa at metus accumsan finibus sit amet vel magna.\n
            Morbi vehicula id neque quis fermentum. Cras mauris metus, rutrum id auctor id, molestie vitae ante. Ut pretium egestas pellentesque. Integer placerat ullamcorper massa, nec maximus arcu efficitur vitae. Quisque odio est, vehicula quis justo at, tempus vulputate lectus. Vivamus sagittis metus et aliquam interdum. Nam in pharetra risus. Proin lectus ligula, pellentesque non nulla nec, fringilla porttitor est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;\n
            Duis vel pharetra urna. Nam finibus risus egestas tortor interdum rhoncus ut sed dolor. Integer quis porta nulla. Maecenas dignissim purus ac nisi viverra tristique. Cras dapibus est commodo est lobortis, consectetur faucibus odio fermentum. Donec tincidunt quis augue ut tempor. Nam consectetur faucibus nisl, vitae hendrerit metus venenatis id. In facilisis lacinia elit sed tempor.`}
          </p>
        </TermsAndConditions>
        <br />
      </div>
    );
  };

  renderTextareaComponent = () => {
    const { textarea } = this.state;
    return (
      <Textarea
        {...textarea}
        name="value"
        theme={this.state.input.theme}
        onChangeFunction={(attr, value) => this.updateState('textarea', attr, value)}
        validations={[maxCharacters(100), minCharacters(10)]}
      />
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
        {this.renderTextareaComponent()}
      </div>
    );
  }
}

render(<App />);

export { Button, Checkbox, Input };
