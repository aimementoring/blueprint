import _classCallCheck from "/Applications/XAMPP/xamppfiles/htdocs/aime/blueprint/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/Applications/XAMPP/xamppfiles/htdocs/aime/blueprint/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "/Applications/XAMPP/xamppfiles/htdocs/aime/blueprint/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "/Applications/XAMPP/xamppfiles/htdocs/aime/blueprint/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "/Applications/XAMPP/xamppfiles/htdocs/aime/blueprint/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits";
import React, { PureComponent } from 'react';
import styles from "./input.module.css";

var Input =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Input, _PureComponent);

  function Input() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Input);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Input)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.handleChange = function (name) {
      return function (event) {
        var target = event.target;
        var value = target.type === 'checkbox' ? target.checked : target.value;

        _this.props.onChangeFunction(name, value);
      };
    };

    return _this;
  }

  _createClass(Input, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classNameFromParent = _this$props.classNameFromParent,
          classNameInputFromParent = _this$props.classNameInputFromParent,
          placeholder = _this$props.placeholder,
          disabled = _this$props.disabled,
          required = _this$props.required,
          name = _this$props.name,
          value = _this$props.value,
          type = _this$props.type;
      return React.createElement("div", {
        className: "".concat(styles.inputWrapper, " ").concat(classNameFromParent)
      }, React.createElement("input", {
        placeholder: placeholder,
        className: "".concat(styles.input, " ").concat(classNameInputFromParent),
        value: value,
        name: name,
        type: type,
        required: required,
        onChange: this.handleChange(name),
        disabled: disabled ? 'disabled' : ''
      }));
    }
  }]);

  return Input;
}(PureComponent);

Input.defaultProps = {
  classNameFromParent: '',
  classNameInputFromParent: '',
  placeholder: '',
  disabled: false,
  required: true,
  onChangeFunction: function onChangeFunction() {},
  name: '',
  value: '',
  type: 'text'
};
export { Input as default };