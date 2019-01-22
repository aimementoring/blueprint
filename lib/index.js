'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".button-module_container__35c76 {\n  margin: 0 auto;\n  text-align: center;\n  float: left;\n  width: 100%; }\n\n.button-module_button__3HALm {\n  font-family: \"Poppins Bold Italic\", Helvetica, Arial, sans-serif;\n  font-size: 0.8rem;\n  text-align: center;\n  color: white;\n  background-color: #7603db;\n  padding: 1rem 4rem;\n  cursor: pointer;\n  opacity: 1;\n  border-radius: 90px;\n  border: 0;\n  transition: all 0.1s ease-in-out;\n  outline: none; }\n  .button-module_button__3HALm:hover {\n    background-color: #da0dff; }\n";
var styles = {"container":"button-module_container__35c76","button":"button-module_button__3HALm"};
styleInject(css);

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
      return React__default.createElement("div", {
        className: "".concat(styles.container, " ").concat(containerClassNameFromParent)
      }, React__default.createElement("button", {
        type: type,
        className: "".concat(classNameFromParent, " ").concat(styles.button),
        onClick: onClickFunction
      }, text));
    }
  }]);

  return Button;
}(React.PureComponent);

Button.defaultProps = {
  containerClassNameFromParent: '',
  classNameFromParent: '',
  onClickFunction: function onClickFunction() {}
};

var css$1 = ".checkbox-module_customCheckbox__USzDh input[type='checkbox'] {\n  display: none;\n  appearance: none; }\n  .checkbox-module_customCheckbox__USzDh input[type='checkbox'] ~ label {\n    position: relative;\n    cursor: pointer;\n    padding-left: 1rem;\n    margin-left: 1rem;\n    transition: ease 0.1s color; }\n    .checkbox-module_customCheckbox__USzDh input[type='checkbox'] ~ label:hover {\n      color: #666666; }\n  .checkbox-module_customCheckbox__USzDh input[type='checkbox']:not(:checked) ~ label:after {\n    content: '';\n    width: 16px;\n    height: 16px;\n    background-color: white;\n    position: absolute;\n    top: -1.5px;\n    left: -12px;\n    border-style: solid;\n    border-width: 1.5px;\n    border-radius: 4px;\n    border-color: #e8e8e8; }\n  .checkbox-module_customCheckbox__USzDh input[type='checkbox']:not(:checked) ~ label:before {\n    content: '';\n    width: 11px;\n    height: 10px;\n    background: none;\n    position: absolute;\n    top: 2.5px;\n    left: -8px;\n    background-size: contain;\n    background-position: center;\n    background-repeat: no-repeat;\n    z-index: 2;\n    opacity: 0;\n    visibility: hidden; }\n\n.checkbox-module_customCheckboxDefault__1uKgf input[type='checkbox']:focus ~ label:after {\n  border-color: #7603db; }\n\n.checkbox-module_customCheckboxDefault__1uKgf input[type='checkbox']:checked ~ label:after {\n  content: '';\n  width: 16px;\n  height: 16px;\n  background-color: white;\n  position: absolute;\n  top: -1.5px;\n  left: -12px;\n  border-style: solid;\n  border-width: 1.5px;\n  border-radius: 4px;\n  border-color: #7603db; }\n\n.checkbox-module_customCheckboxDefault__1uKgf input[type='checkbox']:checked ~ label:before {\n  content: '';\n  width: 11px;\n  height: 10px;\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMSI+ICA8cGF0aCBkPSJNMy4yNjQgMTAuNDg5TC40MjQgNy4zN2ExLjY4IDEuNjggMCAwIDEgMC0yLjIzMiAxLjQ0MiAxLjQ0MiAwIDAgMSAyLjE2IDBsMS43OTggMS45NzRMMTAuNDE2LjQ4NmExLjQ0MiAxLjQ0MiAwIDAgMSAyLjE2IDAgMS42OCAxLjY4IDAgMCAxIDAgMi4yMzNsLTcuMSA3Ljc5NWExLjQzOSAxLjQzOSAwIDAgMS0xLjczLjMzIDEuNTAxIDEuNTAxIDAgMCAxLS40ODItLjM1NXoiIGZpbGw9IiM3NjAzREIiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==\");\n  position: absolute;\n  top: 2.5px;\n  left: -8px;\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  z-index: 2;\n  opacity: 1;\n  visibility: visible; }\n";
var styles$1 = {"customCheckbox":"checkbox-module_customCheckbox__USzDh","customCheckboxDefault":"checkbox-module_customCheckboxDefault__1uKgf"};
styleInject(css$1);

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
      return React__default.createElement("div", {
        className: "".concat(elementClassName, " ").concat(styles$1.customCheckbox, " ").concat(styles$1.customCheckboxDefault),
        onClick: this.handleFieldChange
      }, React__default.createElement("input", {
        type: "hidden",
        name: name,
        value: "no"
      }), React__default.createElement("input", {
        id: customId,
        type: "checkbox",
        className: "hide",
        name: name,
        value: "yes",
        readOnly: true,
        checked: value
      }), React__default.createElement("label", {
        htmlFor: customId
      }, labeltext));
    }
  }]);

  return Checkbox;
}(React.PureComponent);

Checkbox.defaultProps = {
  elementClassName: '',
  handleFieldChange: function handleFieldChange() {},
  value: false,
  extraParamResponse: ''
};

var css$2 = ".input-module_inputWrapper__2RN2o {\n  float: left;\n  width: 100%;\n  margin-bottom: 10px; }\n\n.input-module_input__3vQ2N {\n  height: 60px;\n  color: #7603db;\n  background-color: #fef6ff;\n  border: 1px solid #550d94;\n  font-weight: 400;\n  font-size: 0.9rem;\n  font-family: \"Poppins Bold Italic\", Helvetica, Arial, sans-serif;\n  border-radius: 6px;\n  padding: 0.1em 1.3em;\n  box-sizing: border-box;\n  width: 100%; }\n  .input-module_input__3vQ2N::placeholder {\n    color: rgba(65, 0, 72, 0.769); }\n  @media only screen and (max-width: 40em) {\n    .input-module_input__3vQ2N {\n      margin-bottom: 0.8em; } }\n\n.input-module_input__3vQ2N:focus {\n  background-color: white;\n  border-color: #7603db;\n  outline: none; }\n\n::placeholder {\n  color: #9da1b4; }\n";
var styles$2 = {"inputWrapper":"input-module_inputWrapper__2RN2o","input":"input-module_input__3vQ2N"};
styleInject(css$2);

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
      return React__default.createElement("div", {
        className: "".concat(styles$2.inputWrapper, " ").concat(classNameFromParent)
      }, React__default.createElement("input", {
        placeholder: placeholder,
        className: "".concat(styles$2.input, " ").concat(classNameInputFromParent),
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
}(React.PureComponent);

Input.defaultProps = {
  classNameFromParent: '',
  classNameInputFromParent: '',
  placeholder: '',
  disabled: false,
  required: true,
  value: '',
  type: 'text',
  onChangeFunction: function onChangeFunction() {}
};

exports.Button = Button;
exports.Checkbox = Checkbox;
exports.Input = Input;
