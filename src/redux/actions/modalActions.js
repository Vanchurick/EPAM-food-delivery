export const ActionType = {
  OPEN_MODAL_SIGN_UP: 'OPEN_MODAL_SIGN_UP',
  OPEN_MODAL_LOG_IN: 'OPEN_MODAL_LOG_IN',
  OPEN_MODAL_BASKET: 'OPEN_MODAL_BASKET',
  CLOSE_MODAL: 'CLOSE_MODAL',
};

export const openModalSignUp = () => ({
  type: ActionType.OPEN_MODAL_SIGN_UP,
});

export const openModalLogIn = () => ({
  type: ActionType.OPEN_MODAL_LOG_IN,
});

export const closeModal = () => ({
  type: ActionType.CLOSE_MODAL,
});

export const openModalBasket = () => ({
  type: ActionType.OPEN_MODAL_BASKET,
});
