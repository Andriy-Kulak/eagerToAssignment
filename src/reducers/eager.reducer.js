import {FETCH_ALL_DATA, FETCH_ONE_RECORD} from '../constants/index.constants';
const INITIAL_STATE = {all: [], data: []};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_ALL_DATA:
      return {...state, all: action.payload};
    case FETCH_ONE_RECORD:
      return {...state, data: action.payload};
    default:
      return state;
  }
}
