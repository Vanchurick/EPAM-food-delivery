import { LunchesActionType } from '../actions/lunchesActions';
import { MenuActionType } from '../actions/menuActions';
import { OrderActionType } from '../actions/orderActions';
import { UserActionType } from '../actions/userActions';

const errorReducer = (state = '', { type, payload }) => {
  switch (type) {
    case LunchesActionType.GET_LUNCHES_ERROR:
      return payload.error;
    case MenuActionType.GET_MENU_ERROR:
      return payload.error;
    case OrderActionType.CONFIRM_ORDER_ERROR:
      return payload.error;
    case UserActionType.SIGN_UP_ERROR:
      return payload.error;
    case UserActionType.LOG_IN_ERROR:
      return payload.error;
    default:
      return state;
  }
};

export default errorReducer;
