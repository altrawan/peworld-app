import { combineReducers } from 'redux';
import worker from 'store/reducers/worker';
import recruiter from 'store/reducers/recruiter';

export default combineReducers({
  worker,
  recruiter,
});
