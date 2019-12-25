import axios from 'axios';

import {
  signUpStart,
  signUpSuccess,
  signUpError,
} from '../actions/userActions';

const signUpUser = credentials => dispatch => {
  dispatch(signUpStart());
  axios
    .post('http://localhost:6060/signup', credentials)
    .then(resp => dispatch(signUpSuccess(resp.data)))
    .catch(err => dispatch(signUpError(err)));
};

export default signUpUser;
