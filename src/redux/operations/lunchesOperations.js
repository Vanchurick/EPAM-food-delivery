import axios from 'axios';
import {
  getLunchesStart,
  getLunchesSuccess,
  getLunchesError,
} from '../actions/lunchesActions';
import * as notify from '../../helpers/notification';

const lunchesRequest = (params = {}) => dispatch => {
  dispatch(getLunchesStart());

  const serverUrl =
    process.env.REACT_APP_PRODUCTION_URL || 'http://localhost:6060/';

  const path = `${serverUrl}lunches/?page=${params.page ||
    1}&category=${params.category || ''}&sort=${params.sort || ''}`;

  axios
    .get(path)
    .then(resp => dispatch(getLunchesSuccess(resp.data)))
    .catch(err => {
      notify.error(err.message);
      dispatch(getLunchesError(err.message));
    });
};

export default lunchesRequest;
