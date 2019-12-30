import { UserActionType } from '../actions/userActions';

const initialState = {
  email: '',
  name: '',
  autorization: false,
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UserActionType.SIGN_UP_SUCCESS:
      if (payload.user.status === 'failed') {
        return {
          email: '',
          name: '',
          autorization: false,
        };
      }

      return { ...state, ...payload.user.user, autorization: true };

    case UserActionType.SIGN_UP_ERROR:
      return { ...state };
    case UserActionType.LOG_IN_SUCCESS:
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
        id: payload.user.id,
        autorization: true,
      };
    case UserActionType.LOG_IN_ERROR:
      return {
        email: '',
        name: '',
        autorization: false,
      };
    case UserActionType.LOG_OUT:
      return { ...state, email: '', name: '', autorization: false };
    case UserActionType.SET_ADRESS:
      return { ...state, adress: payload.adress };
    default:
      return state;
  }
};

export default userReducer;
