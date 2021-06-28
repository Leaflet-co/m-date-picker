"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactNative = require("react-native");

var _react = _interopRequireDefault(require("react"));

var _createReactClass = _interopRequireDefault(require("create-react-class"));

var _Picker = _interopRequireDefault(require("rmc-picker/lib/Picker"));

var _DatePickerMixin = _interopRequireDefault(require("./DatePickerMixin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var styles = _reactNative.StyleSheet.create({
  smallPickerItem: {
    fontSize: 20
  },
  item: {
    flex: 1
  },
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10
  }
});

var DatePicker = _createReactClass({
  displayName: "DatePicker",
  mixins: [_DatePickerMixin["default"]],
  render: function render() {
    var _this = this;

    var _this$getValueDataSou = this.getValueDataSource(),
        value = _this$getValueDataSou.value,
        dataSource = _this$getValueDataSou.dataSource;

    var mode = this.props.mode;
    var inner = dataSource.map(function (items, i) {
      return /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
        style: styles.item,
        key: i
      }, /*#__PURE__*/_react["default"].createElement(_Picker["default"], {
        itemStyle: mode === 'datetime' ? styles.smallPickerItem : undefined,
        pure: false,
        selectedValue: value[i],
        onValueChange: function onValueChange(v) {
          _this.onValueChange(i, v);
        }
      }, items));
    });
    return /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
      style: styles.root
    }, inner);
  }
});

var _default = DatePicker;
exports["default"] = _default;