import _classCallCheck from "/Applications/XAMPP/xamppfiles/htdocs/aime/blueprint/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/Applications/XAMPP/xamppfiles/htdocs/aime/blueprint/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "/Applications/XAMPP/xamppfiles/htdocs/aime/blueprint/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "/Applications/XAMPP/xamppfiles/htdocs/aime/blueprint/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "/Applications/XAMPP/xamppfiles/htdocs/aime/blueprint/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits";
import React, { PureComponent } from 'react';
import styles from "./button.module.css";

var Button =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Button, _PureComponent);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, _getPrototypeOf(Button).apply(this, arguments));
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          containerClassNameFromParent = _this$props.containerClassNameFromParent,
          classNameFromParent = _this$props.classNameFromParent,
          onClickFunction = _this$props.onClickFunction,
          text = _this$props.text,
          type = _this$props.type;
      return React.createElement("div", {
        className: "".concat(styles.container, " ").concat(containerClassNameFromParent)
      }, React.createElement("button", {
        type: type,
        className: "".concat(classNameFromParent, " ").concat(styles.button),
        onClick: onClickFunction
      }, text));
    }
  }]);

  return Button;
}(PureComponent);

Button.defaultProps = {
  containerClassNameFromParent: '',
  classNameFromParent: '',
  onClickFunction: function onClickFunction() {}
};
export { Button as default };