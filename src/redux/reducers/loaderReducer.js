import { UserActionType } from '../actions/userActions';
import { MenuActionType } from '../actions/menuActions';
import { OrderActionType } from '../actions/orderActions';
import { LunchesActionType } from '../actions/lunchesActions';

const loaderReducer = (state = false, { type }) => {
  switch (type) {
    case UserActionType.SIGN_UP_START:
      return true;
    case UserActionType.SIGN_UP_SUCCESS:
      return false;
    case UserActionType.SIGN_UP_ERROR:
      return false;
    case UserActionType.LOG_IN_START:
      return true;
    case UserActionType.LOG_IN_SUCCESS:
      return false;
    case UserActionType.LOG_IN_ERROR:
      return false;
    case MenuActionType.GET_MENU_START:
      return true;
    case MenuActionType.GET_MENU_SUCCESS:
      return false;
    case MenuActionType.GET_MENU_ERROR:
      return false;
    case OrderActionType.CONFIRM_ORDER_START:
      return true;
    case OrderActionType.CONFIRM_ORDER_SUCCESS:
      return false;
    case OrderActionType.CONFIRM_ORDER_ERROR:
      return false;
    case LunchesActionType.GET_LUNCHES_START:
      return true;
    case LunchesActionType.GET_LUNCHES_SUCCESS:
      return false;
    case LunchesActionType.GET_LUNCHES_ERROR:
      return false;
    default:
      return state;
  }
};

export default loaderReducer;
