import { BusketActionType } from '../actions/basketActions';
import { isProductExistInBasket } from '../../helpers/helpers';

const busketReducer = (state = [], { type, payload }) => {
  switch (type) {
    case BusketActionType.ADD_PRODUCT:
      if (isProductExistInBasket(state, payload.product)) {
        const product = state.find(el => el.id === payload.product.id);
        product.amount += 1;
        return [...state];
      }
      return [...state, payload.product];
    case BusketActionType.REMOVE_PRODUCT:
      return state.filter(el => {
        if (el.amount > 1) {
          const result = el;
          result.amount -= 1;
          return result;
        }
        return el.id !== payload.id;
      });
    default:
      return state;
  }
};

export default busketReducer;
