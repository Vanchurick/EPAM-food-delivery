import { BusketActionType } from '../actions/basketActions.';

const busketReducer = (state = [], { type, payload }) => {
  switch (type) {
    case BusketActionType.ADD_PRODUCT:
      return [...state, payload.product];
    case BusketActionType.REMOVE_PRODUCT:
      return state.filter(el => el.id !== payload.product.id);
    default:
      return state;
  }
};

export default busketReducer;
