import ActionType from '../actions/userActions';

const initialState = {
  login: '',
  password: '',
  autorizated: false,
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.SIGN_UP:
      return { ...state, login: payload.login, password: payload.password };
    case ActionType.SIGN_IN:
      return { ...state, login: payload.login, password: payload.password };
    default:
      return state;
  }
};

export default userReducer;
