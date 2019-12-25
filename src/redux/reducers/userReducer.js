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
      return { ...state, ...payload.user, autorization: true };
    case ActionType.SIGN_UP_ERROR:
      return { ...state };
    default:
      return state;
  }
};

export default userReducer;
