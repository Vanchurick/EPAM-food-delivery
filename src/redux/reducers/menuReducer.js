import { MenuActionType } from '../actions/menuActions';

const menuReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case MenuActionType.GET_MENU_SUCCESS:
      return { ...payload.menu };
    case MenuActionType.GET_MENU_ERROR:
      return { ...state };
    default:
      return state;
  }
};

export default menuReducer;
