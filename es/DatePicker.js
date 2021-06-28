import { View, StyleSheet } from 'react-native';
import React from 'react';
import createReactClass from 'create-react-class';
import Picker from "rmc-picker/es/Picker";
import DatePickerMixin from './DatePickerMixin';
var styles = StyleSheet.create({
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
var DatePicker = createReactClass({
  displayName: "DatePicker",
  mixins: [DatePickerMixin],
  render: function render() {
    var _this = this;

    var _this$getValueDataSou = this.getValueDataSource(),
        value = _this$getValueDataSou.value,
        dataSource = _this$getValueDataSou.dataSource;

    var mode = this.props.mode;
    var inner = dataSource.map(function (items, i) {
      return /*#__PURE__*/React.createElement(View, {
        style: styles.item,
        key: i
      }, /*#__PURE__*/React.createElement(Picker, {
        itemStyle: mode === 'datetime' ? styles.smallPickerItem : undefined,
        pure: false,
        selectedValue: value[i],
        onValueChange: function onValueChange(v) {
          _this.onValueChange(i, v);
        }
      }, items));
    });
    return /*#__PURE__*/React.createElement(View, {
      style: styles.root
    }, inner);
  }
});
export default DatePicker;