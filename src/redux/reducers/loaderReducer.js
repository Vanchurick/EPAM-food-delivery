import { ActionType } from '../actions/userActions';

const loaderReducer = (state = false, { type }) => {
  switch (type) {
    case ActionType.SIGN_UP_START:
      return true;
    case ActionType.SIGN_UP_SUCCESS:
      return false;
    case ActionType.SIGN_UP_ERROR:
      return false;
    case ActionType.LOG_IN_START:
      return true;
    case ActionType.LOG_IN_SUCCESS:
      return false;
    case ActionType.LOG_IN_ERROR:
      return false;
    default:
      return state;
  }
};

export default loaderReducer;
