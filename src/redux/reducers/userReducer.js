import { ActionType } from '../actions/userActions';

const initialState = {
  email: '',
  password: '',
  name: '',
  autorization: false,
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.SIGN_UP_SUCCESS:
      if (payload.user.status === 'failed') {
        return {
          email: '',
          password: '',
          name: '',
          autorization: false,
        };
      }

      return { ...state, ...payload.user.user, autorization: true };
    // return { ...state, ...payload.user, autorization: true };
    case ActionType.SIGN_UP_ERROR:
      return { ...state };
    default:
      return state;
  }
};

export default userReducer;
