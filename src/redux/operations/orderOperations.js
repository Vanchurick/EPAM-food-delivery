import axios from 'axios';
import * as notify from '../../helpers/notification';

import {
  confirmOrderStart,
  confirmOrderSuccess,
  confirmOrderError,
} from '../actions/orderActions';

const confirmOrder = credentials => dispatch => {
  dispatch(confirmOrderStart());

  const serverUrl = process.env.REACT_APP_API_URL;

  axios
    .post(`${serverUrl}order`, credentials)
    .then(resp => {
      notify.alert('Order confirmed! Diliverman will be ASAP!');
      dispatch(confirmOrderSuccess(resp.data));
    })
    .catch(err => {
      notify.error(err.message);
      dispatch(confirmOrderError(err.message));
    });
};

export default confirmOrder;
