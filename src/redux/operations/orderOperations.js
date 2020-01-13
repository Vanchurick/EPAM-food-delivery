import axios from 'axios';

import {
  confirmOrderStart,
  confirmOrderSuccess,
  confirmOrderError,
} from '../actions/orderActions';

const confirmOrder = credentials => dispatch => {
  dispatch(confirmOrderStart());
  axios
    .post('http://localhost:6060/order', credentials)
    .then(resp => dispatch(confirmOrderSuccess(resp.data)))
    .catch(err => dispatch(confirmOrderError(err)));
};

export default confirmOrder;
