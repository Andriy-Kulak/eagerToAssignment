import {combineReducers} from 'redux';
import TimesheetReducer from './eager.reducer';

const rootReducer = combineReducers({
  sheets: TimesheetReducer
});

export default rootReducer;
