import { combineReducers } from 'redux';
import worker from './worker';
import skill from './skill';
import workerSkill from './workerSkill';
import workerAll from './workerAll';
import skillWorker from './skillWorker';

export default combineReducers({
  worker,
  skill,
  workerSkill,
  workerAll,
  skillWorker,
});
