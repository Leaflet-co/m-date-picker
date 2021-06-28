"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _createReactClass = _interopRequireDefault(require("create-react-class"));

var _index = _interopRequireDefault(require("rmc-picker/lib/index"));

var _classnames = _interopRequireDefault(require("classnames"));

var _DatePickerMixin = _interopRequireDefault(require("./DatePickerMixin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var DatePickerWeb = _createReactClass({
  displayName: "DatePickerWeb",
  mixins: [_DatePickerMixin["default"]],
  getDefaultProps: function getDefaultProps() {
    return {
      prefixCls: 'rmc-date-picker',
      pickerPrefixCls: 'rmc-picker',
      disabled: false
    };
  },
  render: function render() {
    var _this = this;

    var props = this.props;
    var prefixCls = props.prefixCls,
        pickerPrefixCls = props.pickerPrefixCls,
        className = props.className,
        rootNativeProps = props.rootNativeProps,
        disabled = props.disabled;

    var _this$getValueDataSou = this.getValueDataSource(),
        value = _this$getValueDataSou.value,
        dataSource = _this$getValueDataSou.dataSource;

    var inner = dataSource.map(function (items, i) {
      return /*#__PURE__*/_react["default"].createElement("div", {
        key: i,
        className: "".concat(prefixCls, "-item")
      }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
        disabled: disabled,
        prefixCls: pickerPrefixCls,
        pure: false,
        selectedValue: value[i],
        onValueChange: function onValueChange(v) {
          _this.onValueChange(i, v);
        }
      }, items));
    });
    return /*#__PURE__*/_react["default"].createElement("div", _extends({}, rootNativeProps, {
      className: (0, _classnames["default"])(className, prefixCls)
    }), inner);
  }
});

var _default = DatePickerWeb;
exports["default"] = _default;