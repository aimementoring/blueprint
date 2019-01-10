import _classCallCheck from "/Applications/XAMPP/xamppfiles/htdocs/aime/blueprint/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/Applications/XAMPP/xamppfiles/htdocs/aime/blueprint/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "/Applications/XAMPP/xamppfiles/htdocs/aime/blueprint/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "/Applications/XAMPP/xamppfiles/htdocs/aime/blueprint/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "/Applications/XAMPP/xamppfiles/htdocs/aime/blueprint/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits";
import React, { PureComponent } from 'react';
import styles from "./checkbox.module.css";

var Checkbox =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Checkbox, _PureComponent);

  function Checkbox() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Checkbox);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Checkbox)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.handleFieldChange = function (e) {
      e.preventDefault();
      var _this$props = _this.props,
          handleFieldChange = _this$props.handleFieldChange,
          name = _this$props.name,
          extraParamResponse = _this$props.extraParamResponse,
          value = _this$props.value;
      handleFieldChange(name, !value, extraParamResponse);
    };

    return _this;
  }

  _createClass(Checkbox, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          elementClassName = _this$props2.elementClassName,
          labeltext = _this$props2.labeltext,
          name = _this$props2.name,
          customId = _this$props2.customId,
          value = _this$props2.value;
      return React.createElement("div", {
        className: "".concat(elementClassName, " ").concat(styles.customCheckbox, " ").concat(styles.customCheckboxDefault),
        onClick: this.handleFieldChange
      }, React.createElement("input", {
        type: "hidden",
        name: name,
        value: "no"
      }), React.createElement("input", {
        id: customId,
        type: "checkbox",
        className: "hide",
        name: name,
        value: "yes",
        readOnly: true,
        checked: value
      }), React.createElement("label", {
        htmlFor: customId
      }, labeltext));
    }
  }]);

  return Checkbox;
}(PureComponent);

Checkbox.defaultProps = {
  elementClassName: '',
  handleFieldChange: function handleFieldChange() {},
  value: false,
  extraParamResponse: ''
};
export { Checkbox as default };