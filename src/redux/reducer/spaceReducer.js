import { MOVE_ROCKET, REACH_MOON } from '../actions';

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
    default:
      return state;
  };
}

export default spaceReducer;
