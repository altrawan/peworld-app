import { combineReducers } from 'redux';
import worker from './worker';
import recruiter from './recruiter';

export default combineReducers({
  worker,
  recruiter,
});
