'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _en_US = require('./locale/en_US');

var _en_US2 = _interopRequireDefault(_en_US);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getDaysInMonth(now, selYear, selMonth) {
    return now.clone().year(selYear).month(selMonth).endOf('month').date();
}
var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var DATETIME = 'datetime';
var DATE = 'date';
var TIME = 'time';
var LEAFLET = 'leaflet';
exports["default"] = {
    getDefaultProps: function getDefaultProps() {
        return {
            locale: _en_US2["default"],
            mode: DATE,
            onDateChange: function onDateChange() {}
        };
    },
    getInitialState: function getInitialState() {
        return {
            date: this.props.date || this.props.defaultDate
        };
    },
    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        if ('date' in nextProps) {
            this.setState({
                date: nextProps.date || nextProps.defaultDate
            });
        }
    },
    onValueChange: function onValueChange(index, value) {
        var props = this.props;
        var newValue = this.getDate().clone();
        if (props.mode === DATETIME || props.mode === DATE) {
            switch (index) {
                case 0:
                    newValue.year(value);
                    break;
                case 1:
                    newValue.month(value);
                    break;
                case 2:
                    newValue.date(value);
                    break;
                case 3:
                    newValue.hour(value);
                    break;
                case 4:
                    newValue.minute(value);
                    break;
                default:
                    break;
            }
        } else if (props.mode === LEAFLET) {
            switch (index) {
                case 0:
                    newValue.month(value);
                    break;
                case 1:
                    newValue.date(value);
                    break;
                case 2:
                    newValue.year(value);
                    break;
            }
        } else {
            switch (index) {
                case 0:
                    newValue.hour(value);
                    break;
                case 1:
                    newValue.minute(value);
                    break;
                default:
                    break;
            }
        }
        newValue = this.clipDate(newValue);
        if (!('date' in this.props)) {
            this.setState({
                date: newValue
            });
        }
        props.onDateChange(newValue);
    },
    getDefaultMinDate: function getDefaultMinDate() {
        if (!this.defaultMinDate) {
            this.defaultMinDate = this.getGregorianCalendar([2000, 1, 1, 0, 0, 0]);
        }
        return this.defaultMinDate;
    },
    getDefaultMaxDate: function getDefaultMaxDate() {
        if (!this.defaultMaxDate) {
            this.defaultMaxDate = this.getGregorianCalendar([2030, 1, 1, 23, 59, 59]);
        }
        return this.defaultMaxDate;
    },
    getDate: function getDate() {
        return this.state.date || this.getDefaultMinDate();
    },
    getMinYear: function getMinYear() {
        return this.getMinDate().year();
    },
    getMaxYear: function getMaxYear() {
        return this.getMaxDate().year();
    },
    getMinMonth: function getMinMonth() {
        return this.getMinDate().month();
    },
    getMaxMonth: function getMaxMonth() {
        return this.getMaxDate().month();
    },
    getMinDay: function getMinDay() {
        return this.getMinDate().date();
    },
    getMaxDay: function getMaxDay() {
        return this.getMaxDate().date();
    },
    getMinHour: function getMinHour() {
        return this.getMinDate().hour();
    },
    getMaxHour: function getMaxHour() {
        return this.getMaxDate().hour();
    },
    getMinMinute: function getMinMinute() {
        return this.getMinDate().minute();
    },
    getMaxMinute: function getMaxMinute() {
        return this.getMaxDate().minute();
    },
    getMinDate: function getMinDate() {
        return this.props.minDate || this.getDefaultMinDate();
    },
    getMaxDate: function getMaxDate() {
        return this.props.maxDate || this.getDefaultMaxDate();
    },
    getDateData: function getDateData(options) {
        var locale = this.props.locale;
        var mode = this.props.mode;
        var date = this.getDate();
        var selYear = date.year();
        var selMonth = date.month();
        var minDateYear = this.getMinYear();
        var maxDateYear = this.getMaxYear();
        var minDateMonth = this.getMinMonth();
        var maxDateMonth = this.getMaxMonth();
        var minDateDay = this.getMinDay();
        var maxDateDay = this.getMaxDay();
        var years = [];
        for (var i = minDateYear; i <= maxDateYear; i++) {
            years.push({
                value: i,
                label: i + locale.year
            });
        }
        var months = [];
        var minMonth = 0;
        var maxMonth = 11;
        if (minDateYear === selYear) {
            minMonth = minDateMonth;
        }
        if (maxDateYear === selYear) {
            maxMonth = maxDateMonth;
        }
        for (var _i = minMonth; _i <= maxMonth; _i++) {
            var label = _i + 1 + locale.month;
            if (options && options.needMonthInString) {
                label = monthNames[_i] + locale.month;
            }
            months.push({
                value: _i,
                label: label
            });
        }
        var days = [];
        var minDay = 1;
        var maxDay = getDaysInMonth(date, selYear, selMonth);
        if (minDateYear === selYear && minDateMonth === selMonth) {
            minDay = minDateDay;
        }
        if (maxDateYear === selYear && maxDateMonth === selMonth) {
            maxDay = maxDateDay;
        }
        for (var _i2 = minDay; _i2 <= maxDay; _i2++) {
            days.push({
                value: _i2,
                label: _i2 + locale.day
            });
        }
        if (mode === LEAFLET) {
            return [months, days, years];
        }
        return [years, months, days];
    },
    getTimeData: function getTimeData() {
        var minHour = 0;
        var maxHour = 23;
        var minMinute = 0;
        var maxMinute = 59;
        var _props = this.props,
            mode = _props.mode,
            locale = _props.locale;

        var date = this.getDate();
        var minDateMinute = this.getMinMinute();
        var maxDateMinute = this.getMaxMinute();
        var minDateHour = this.getMinHour();
        var maxDateHour = this.getMaxHour();
        var hour = date.hour();
        if (mode === DATETIME) {
            var year = date.year();
            var month = date.month();
            var day = date.date();
            var minDateYear = this.getMinYear();
            var maxDateYear = this.getMaxYear();
            var minDateMonth = this.getMinMonth();
            var maxDateMonth = this.getMaxMonth();
            var minDateDay = this.getMinDay();
            var maxDateDay = this.getMaxDay();
            if (minDateYear === year && minDateMonth === month && minDateDay === day) {
                minHour = minDateHour;
                if (minDateHour === hour) {
                    minMinute = minDateMinute;
                }
            }
            if (maxDateYear === year && maxDateMonth === month && maxDateDay === day) {
                maxHour = maxDateHour;
                if (maxDateHour === hour) {
                    maxMinute = maxDateMinute;
                }
            }
        } else {
            minHour = minDateHour;
            if (minDateHour === hour) {
                minMinute = minDateMinute;
            }
            maxHour = maxDateHour;
            if (maxDateHour === hour) {
                maxMinute = maxDateMinute;
            }
        }
        var hours = [];
        for (var i = minHour; i <= maxHour; i++) {
            hours.push({
                value: i,
                label: i + locale.hour
            });
        }
        var minutes = [];
        for (var _i3 = minMinute; _i3 <= maxMinute; _i3++) {
            minutes.push({
                value: _i3,
                label: _i3 + locale.minute
            });
        }
        return [hours, minutes];
    },
    getGregorianCalendar: function getGregorianCalendar(arg) {
        return (0, _moment2["default"])(arg);
    },
    clipDate: function clipDate(date) {
        var mode = this.props.mode;

        var minDate = this.getMinDate();
        var maxDate = this.getMaxDate();
        if (mode === DATETIME || mode === LEAFLET) {
            if (date.isBefore(minDate)) {
                return minDate.clone();
            }
            if (date.isAfter(maxDate)) {
                return maxDate.clone();
            }
        } else if (mode === DATE) {
            if (date.isBefore(minDate, 'day')) {
                return minDate.clone();
            }
            if (date.isAfter(maxDate, 'day')) {
                return maxDate.clone();
            }
        } else {
            var maxHour = maxDate.hour();
            var maxMinutes = maxDate.minute();
            var minHour = minDate.hour();
            var minMinutes = minDate.minute();
            var hour = date.hour();
            var minutes = date.minute();
            if (hour < minHour || hour === minHour && minutes < minMinutes) {
                return minDate.clone();
            }
            if (hour > maxHour || hour === maxHour && minutes > maxMinutes) {
                return maxDate.clone();
            }
        }
        return date;
    },
    getValueDataSource: function getValueDataSource() {
        var mode = this.props.mode;

        var date = this.getDate();
        var dataSource = [];
        var value = [];
        if (mode === LEAFLET) {
            dataSource = [].concat((0, _toConsumableArray3["default"])(this.getDateData({ needMonthInString: true })));
            value = [date.month(), date.date(), date.year()];
        }
        if (mode === DATETIME || mode === DATE) {
            dataSource = [].concat((0, _toConsumableArray3["default"])(this.getDateData()));
            value = [date.year(), date.month(), date.date()];
        }
        if (mode === DATETIME || mode === TIME) {
            dataSource = dataSource.concat(this.getTimeData());
            value = value.concat([date.hour(), date.minute()]);
        }
        return {
            value: value,
            dataSource: dataSource
        };
    }
};
module.exports = exports['default'];