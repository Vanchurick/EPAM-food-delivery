import axios from 'axios';
import {
  getLunchesStart,
  getLunchesSuccess,
  getLunchesError,
} from '../actions/lunchesActions';

const lunchesRequest = (params = {}) => dispatch => {
  dispatch(getLunchesStart());

  const path = `http://localhost:6060/lunches/?page=${params.page ||
    1}&category=${params.category || ''}&sort=${params.sort || ''}`;

  axios
    .get(path)
    .then(resp => dispatch(getLunchesSuccess(resp.data)))
    .catch(err => dispatch(getLunchesError(err.message)));
};

export default lunchesRequest;