import axios from 'axios';

import {
  getMenuStart,
  getMenuSuccess,
  getMenuError,
} from '../actions/menuActions';

const getMenu = category => dispatch => {
  dispatch(getMenuStart());
  const GET_MENU_URL = `http://localhost:6060/menu/${category}`;
  axios
    .get(GET_MENU_URL)
    .then(resp => dispatch(getMenuSuccess(resp.data)))
    .catch(err => dispatch(getMenuError(err)));
};

export default getMenu;
