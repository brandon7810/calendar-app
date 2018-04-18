export const addEvent = (name, date) => {
  return {
    type: 'ADD_EVENT',
    name: name,
    date: date
  };
};

export const nextMonth = () => {
  return {
    type: 'NEXT_MONTH'
  };
};

export const previousMonth = () => {
  return {
    type: 'PREVIOUS_MONTH'
  };
};

export const selectDate = (date) => {
  return {
    type: 'SELECT_DATE',
    date: date
  }
}
