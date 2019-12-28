import { ActionType } from '../actions/userActions';

const initialState = {
  email: '',
  name: '',
  autorization: false,
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.SIGN_UP_SUCCESS:
      if (payload.user.status === 'failed') {
        return {
          email: '',
          name: '',
          autorization: false,
        };
      }

      return { ...state, ...payload.user.user, autorization: true };

    case ActionType.SIGN_UP_ERROR:
      return { ...state };
    case ActionType.LOG_IN_SUCCESS:
      if (payload.status === 'failed') {
        return {
          email: '',
          name: '',
          autorization: false,
        };
      }
      return {
        ...state,
        name: payload.user.name,
        email: payload.user.email,
        autorization: true,
      };
    case ActionType.LOG_IN_ERROR:
      return {
        email: '',
        name: '',
        autorization: false,
      };
    case ActionType.LOG_OUT:
      return { ...state, email: '', name: '', autorization: false };
    default:
      return state;
  }
};

export default userReducer;
