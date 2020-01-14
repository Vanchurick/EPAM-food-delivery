import axios from 'axios';
import * as notify from '../../helpers/notification';

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
    .then(resp => {
      if (resp.data.status === 'failed') {
        notify.alert(resp.data.message);
        dispatch(signUpError(resp.data.message));
        return;
      }

      notify.alert(
        `Wellcome to EPAM Food Delivery App, ${resp.data.user.name} `,
      );
      dispatch(signUpSuccess(resp.data));
    })
    .catch(err => {
      notify.error(err.message);
      dispatch(signUpError(err.message));
    });
};

export const loginUser = credentials => dispatch => {
  dispatch(logInStart());

  axios
    .post('http://localhost:6060/login', credentials)
    .then(resp => {
      if (!resp.data.login) {
        notify.alert('Wrong email or password! Please, check it!');
        dispatch(signUpError('Failed login!'));
        return;
      }

      notify.alert(`Wellcome back, ${resp.data.user.name} `);
      dispatch(logInSuccess(resp.data));
    })
    .catch(error => {
      notify.error(error.message);
      dispatch(logInError(error));
    });
};
