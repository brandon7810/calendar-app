import moment from 'moment';
const time = (
    state = {
        selectedMonth: moment().date(1),
        selectedDate: null
    }, action) => {
    const currentMonth = state.selectedMonth.month();
    const currentYear = state.selectedMonth.year();
    let monthToChange, yearTochange;

    switch (action.type) {
        case 'NEXT_MONTH':
            monthToChange = currentMonth === 11 ? 0 : currentMonth + 1;
            yearTochange = currentMonth === 11 ? currentYear + 1 : currentYear;
            return { selectedMonth: moment().year(yearTochange).month(monthToChange).date(1)};
            
        case 'PREVIOUS_MONTH':
            monthToChange = currentMonth === 0 ? 11 : currentMonth - 1;
            yearTochange = currentMonth === 0 ? currentYear - 1 : currentYear;
            return { selectedMonth: moment().year(yearTochange).month(monthToChange).date(1)};

        case 'SELECT_DATE':
            return { selectedMonth: state.selectedMonth, selectedDate: action.date ? moment(action.date) : null};

        default:
            return state;
    }
};

export default time;
