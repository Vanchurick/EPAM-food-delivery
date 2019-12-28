import { ActionType } from '../actions/modalActions';

const initialState = {
  modal: false,
  signup: false,
  login: false,
  basket: false,
};

const userReducer = (state = initialState, { type }) => {
  switch (type) {
    case ActionType.OPEN_MODAL_SIGN_UP:
      return { ...state, modal: true, signup: true };
    case ActionType.OPEN_MODAL_LOG_IN:
      return { ...state, modal: true, login: true };
    case ActionType.CLOSE_MODAL:
      return {
        ...state,
        modal: false,
        signup: false,
        login: false,
        basket: false,
      };
    default:
      return state;
  }
};

export default userReducer;
