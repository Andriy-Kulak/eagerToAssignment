import axios from 'axios';
import {FETCH_ALL_DATA, FETCH_ONE_RECORD, ROOT_URL} from '../constants/index.constants';
import {store} from '../index';

// Fetching specific record by id
export function fetchEagerRecord(id) {
  const request = axios.get(`${ROOT_URL}/${id}`);
  request.then(({data}) => {
    return store.dispatch({type: FETCH_ONE_RECORD, payload: data});
  });
}

// fetching all records
export function fetchEagerData() {
  const request = axios.get(ROOT_URL);
  request.then(({data}) => {
    return store.dispatch({type: FETCH_ALL_DATA, payload: data});
  });
}
