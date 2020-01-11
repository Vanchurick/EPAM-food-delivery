export const UserActionType = {
  SIGN_UP_START: 'SIGN_UP_START',
  SIGN_UP_SUCCESS: 'SIGN_UP_SUCCESS',
  SIGN_UP_ERROR: 'SIGN_UP_ERROR',
  LOG_IN_START: 'LOG_IN_START',
  LOG_IN_SUCCESS: 'LOG_IN_SUCCESS',
  LOG_IN_ERROR: 'LOG_IN_ERROR',
  LOG_OUT: 'LOG_OUT',
  SET_ADRESS: 'SET_ADRESS',
  SET_NAME: 'SET_NAME',
  SET_EMAIL: 'SET_EMAIL',
};

// Sign up user actioncreators

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

// Login user actioncreators

export const logInStart = () => ({
  type: 'LOG_IN_START',
});

export const logInSuccess = data => ({
  type: 'LOG_IN_SUCCESS',
  payload: data,
});

export const logInError = error => ({
  type: 'LOG_IN_ERROR',
  payload: { error },
});

// Logout user actioncreators

export const logOut = () => ({
  type: 'LOG_OUT',
});

// user adress

export const setAdress = adress => ({
  type: 'SET_ADRESS',
  payload: { adress },
});

export const setName = name => ({
  type: 'SET_NAME',
  payload: { name },
});

export const setEmail = email => ({
  type: 'SET_EMAIL',
  payload: { email },
});
