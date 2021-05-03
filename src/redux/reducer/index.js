import { combineReducers } from 'redux';
import spaceReducer from './spaceReducer';
import marsReducer from './marsReducer';

const rootReducer = combineReducers({
  spaceReducer,
  marsReducer,
});

export default rootReducer;
