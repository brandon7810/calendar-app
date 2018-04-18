import moment from 'moment';

export function generateCalendarDates(selectedMonth) {
    const startDay = moment(selectedMonth).day('Sunday');
    const calendarDates = [];
    let weekToPush = [moment(startDay)];
    let dateToPush = moment(startDay);

    for(let i=0; i<41; i++){
        dateToPush.add(1, 'days');
        weekToPush.push(moment(dateToPush));

        if (weekToPush.length === 7) {
            calendarDates.push(weekToPush);
            weekToPush = [];
        }
    }

    return calendarDates;
}
