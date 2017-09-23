import { FETCH_WEATHER } from '../actions/index';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_WEATHER:
      // dont use state.push = mutation
      // use state.concat != mutation or spread ops
      return [ action.payload.data, ...state ];
    default:
      return state;
  }
};