import { CONSTRUCT_MARS_BASE } from '../actions';

const INITIAL_STATE = {
  base: 0,
  satellites: [],
};

function marsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CONSTRUCT_MARS_BASE:
      return { ...state, base: state.base + 10 };
    default:
      return state;
  };
}

export default marsReducer;
