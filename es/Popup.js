function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

import React from 'react';
import PopupPicker from "rmc-picker/es/Popup";

function noop() {}

var PopupDatePicker = /*#__PURE__*/function (_React$Component) {
  _inherits(PopupDatePicker, _React$Component);

  var _super = _createSuper(PopupDatePicker);

  function PopupDatePicker(props) {
    var _this;

    _classCallCheck(this, PopupDatePicker);

    _this = _super.call(this, props);

    _this.onPickerChange = function (pickerDate) {
      _this.setState({
        pickerDate: pickerDate
      });

      if (_this.props.datePicker.props.onDateChange) {
        _this.props.datePicker.props.onDateChange(pickerDate);
      }
    };

    _this.onOk = function () {
      var onChange = _this.props.onChange;

      if (onChange) {
        onChange(_this.datePicker.getDate());
      }
    };

    _this.saveRef = function (datePicker) {
      _this.datePicker = datePicker;
    };

    _this.fireVisibleChange = function (visible) {
      if (_this.state.visible !== visible) {
        if (!('visible' in _this.props)) {
          _this.setVisibleState(visible);
        }

        var onVisibleChange = _this.props.onVisibleChange;

        if (onVisibleChange) {
          onVisibleChange(visible);
        }
      }
    };

    _this.state = {
      pickerDate: null,
      visible: _this.props.visible || false
    };
    return _this;
  }

  _createClass(PopupDatePicker, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if ('visible' in nextProps) {
        this.setVisibleState(nextProps.visible);
      }
    }
  }, {
    key: "setVisibleState",
    value: function setVisibleState(visible) {
      this.setState({
        visible: visible
      });

      if (!visible) {
        this.setState({
          pickerDate: null
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var dataPicker = /*#__PURE__*/React.cloneElement(this.props.datePicker, {
        date: this.state.pickerDate || this.props.date,
        onDateChange: this.onPickerChange,
        ref: this.saveRef
      });
      return /*#__PURE__*/React.createElement(PopupPicker, _extends({}, this.props, {
        onVisibleChange: this.fireVisibleChange,
        onOk: this.onOk,
        content: dataPicker,
        visible: this.state.visible
      }));
    }
  }]);

  return PopupDatePicker;
}(React.Component);

export { PopupDatePicker as default };
PopupDatePicker.defaultProps = {
  onVisibleChange: noop,
  prefixCls: 'rmc-picker-popup',
  onChange: noop,
  onDismiss: noop,
  onPickerChange: noop
};