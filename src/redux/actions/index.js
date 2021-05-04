export const MOVE_ROCKET = 'MOVE_ROCKET';
export const REACH_MOON = 'REACH_MOON';
export const SET_TO_BASE = 'SET_TO_BASE';
export const CONSTRUCT_BASE = 'CONSTRUCT_BASE';
export const REACH_MARS = 'REACH_MARS';

export const launchRocket = () => ({ type: MOVE_ROCKET });

export const reachMoon = () => ({ type: REACH_MOON });

export const setRocketToBase = () => ({ type: SET_TO_BASE });

export const constructBase = () => ({ type: CONSTRUCT_BASE });

export const reachMars= () => ({ type: REACH_MARS });

