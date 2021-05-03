import { CONSTRUCT_MARS_BASE, CONSTRUCT_SATELLITE } from '../actions';

const INITIAL_STATE = {
  base: 0,
  satellites: [],
};

function marsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CONSTRUCT_MARS_BASE:
      return { ...state, base: state.base + 1 };
    case CONSTRUCT_SATELLITE:
      return { ...state, satellites: [...state.satellites, action.name]};
    default:
      return state;
  };
}

export default marsReducer;
