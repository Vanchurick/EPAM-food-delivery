export const MenuActionType = {
  GET_MENU_START: 'GET_MENU_START',
  GET_MENU_SUCCESS: 'GET_MENU_SUCCESS',
  GET_MENU_ERROR: 'GET_MENU_ERROR',
};

export const getMenuStart = () => ({
  type: MenuActionType.GET_MENU_START,
});

export const getMenuSuccess = menu => ({
  type: MenuActionType.GET_MENU_SUCCESS,
  payload: { menu },
});

export const getMenuError = error => ({
  type: MenuActionType.GET_MENU_ERROR,
  payload: { error },
});
