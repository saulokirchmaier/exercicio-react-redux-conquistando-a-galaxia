import { MOVE_ROCKET, REACH_MOON, SET_TO_BASE, CONSTRUCT_BASE, REACH_MARS } from '../actions';

const INITIAL_STATE = {
  launchRocket: false,
  reachMoon: false,
  moonBase: 0,
  reachMars: false,
};

function spaceReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case MOVE_ROCKET:
      return { ...state, launchRocket: true };
    case REACH_MOON:
      return { ...state, reachMoon: true };
    case SET_TO_BASE:
      return { ...state, launchRocket: false };
    case CONSTRUCT_BASE:
      return { ...state };
    case REACH_MARS:
      return { ...state, reachMars: true };
    default:
      return state;
  };
}

export default spaceReducer;
