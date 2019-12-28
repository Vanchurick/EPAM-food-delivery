import axios from 'axios';

import {
  signUpStart,
  signUpSuccess,
  signUpError,
  logInStart,
  logInSuccess,
  logInError,
} from '../actions/userActions';

export const signUpUser = credentials => dispatch => {
  dispatch(signUpStart());
  axios
    .post('http://localhost:6060/signup', credentials)
    .then(resp => dispatch(signUpSuccess(resp.data)))
    .catch(err => dispatch(signUpError(err)));
};

export const loginUser = credentials => dispatch => {
  dispatch(logInStart());

  axios
    .post('http://localhost:6060/login', credentials)
    .then(resp => dispatch(logInSuccess(resp.data)))
    .catch(error => dispatch(logInError(error)));
};
