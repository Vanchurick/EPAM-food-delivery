import { LunchesActionType } from '../actions/lunchesActions';

const lunchesReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case LunchesActionType.GET_LUNCHES_SUCCESS:
      return payload.data;
    default:
      return state;
  }
};

export default lunchesReducer;
