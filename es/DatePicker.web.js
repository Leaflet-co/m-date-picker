function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import Picker from "rmc-picker/es/index";
import classnames from 'classnames';
import DatePickerMixin from './DatePickerMixin';
var DatePickerWeb = React.createClass({
  displayName: "DatePickerWeb",
  mixins: [DatePickerMixin],
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
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        className: "".concat(prefixCls, "-item")
      }, /*#__PURE__*/React.createElement(Picker, {
        disabled: disabled,
        prefixCls: pickerPrefixCls,
        pure: false,
        selectedValue: value[i],
        onValueChange: function onValueChange(v) {
          _this.onValueChange(i, v);
        }
      }, items));
    });
    return /*#__PURE__*/React.createElement("div", _extends({}, rootNativeProps, {
      className: classnames(className, prefixCls)
    }), inner);
  }
});
export default DatePickerWeb;