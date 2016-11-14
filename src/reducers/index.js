import {combineReducers} from 'redux';
import EagerReducer from './eager.reducer';

const rootReducer = combineReducers({
  sheets: EagerReducer
});

export default rootReducer;
