import uuidv4 from 'uuid/v4';

const event = (state, action) => {
  switch (action.type) {
    case 'ADD_EVENT':
      return {
        id: uuidv4(),
        date: action.date,
        name: action.name,
      };
    default:
      return state;
  }
};

const events = (state = [], action) => {
  switch (action.type) {
    case 'ADD_EVENT':
      return [
        ...state,
        event(undefined, action),
      ];
    default:
      return state;
  }
};

export default events;
