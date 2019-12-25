export const ActionType = {
  SIGN_UP_START: 'SIGN_UP_START',
  SIGN_UP_SUCCESS: 'SIGN_UP_SUCCESS',
  SIGN_UP_ERROR: 'SIGN_UP_ERROR',
};

export const signUpStart = () => ({
  type: 'SIGN_UP_START',
});

export const signUpSuccess = user => ({
  type: 'SIGN_UP_SUCCESS',
  payload: { user },
});

export const signUpError = error => ({
  type: 'SIGN_UP_ERROR',
  payload: { error },
});
