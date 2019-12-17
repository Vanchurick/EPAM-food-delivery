export const ActionType = {
  SIGN_IN: 'SIGN_IN',
  SIGN_UP: 'SIGN_UP',
};

export const signUp = (login, password) => ({
  type: ActionType.SIGN_UP,
  payload: { login, password },
});

export const signIn = (login, password) => ({
  type: ActionType.SIGN_IN,
  payload: { login, password },
});
