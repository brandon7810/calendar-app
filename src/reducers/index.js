import { combineReducers } from 'redux';
import events from './events';
import time from './time';

const calendarApp = combineReducers({
  events,
  time
});

export default calendarApp;
