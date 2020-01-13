import axios from 'axios';
import * as notify from '../../helpers/notification';

import {
  confirmOrderStart,
  confirmOrderSuccess,
  confirmOrderError,
} from '../actions/orderActions';

const confirmOrder = credentials => dispatch => {
  dispatch(confirmOrderStart());
  axios
    .post('http://localhost:6060/order', credentials)
    .then(resp => {
      notify.success('Order confirmed! Diliverman will be ASAP!');
      dispatch(confirmOrderSuccess(resp.data));
    })
    .catch(err => {
      notify.error(err.message);
      dispatch(confirmOrderError(err.message));
    });
};

export default confirmOrder;
