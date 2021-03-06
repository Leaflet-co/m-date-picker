declare var _default: {
    getDefaultProps(): {
        locale: {
            year: string;
            month: string;
            day: string;
            hour: string;
            minute: string;
        };
        mode: string;
        onDateChange(): void;
    };
    getInitialState(): {
        date: any;
    };
    componentWillReceiveProps(nextProps: any): void;
    onValueChange(index: any, value: any): void;
    getDefaultMinDate(): any;
    getDefaultMaxDate(): any;
    getDate(): any;
    getMinYear(): any;
    getMaxYear(): any;
    getMinMonth(): any;
    getMaxMonth(): any;
    getMinDay(): any;
    getMaxDay(): any;
    getMinHour(): any;
    getMaxHour(): any;
    getMinMinute(): any;
    getMaxMinute(): any;
    getMinDate(): any;
    getMaxDate(): any;
    getDateData(options: any): any[][];
    getTimeData(): any[][];
    getGregorianCalendar(arg: any): any;
    clipDate(date: any): any;
    getValueDataSource(): {
        value: any[];
        dataSource: any[];
    };
};
export default _default;
