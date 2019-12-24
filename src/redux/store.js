import { createStore, combineReducers } from 'redux';
import userReducer from './reducers/userReducer';
import modalReducer from './reducers/modalReducer';

const rootReducer = combineReducers({
  user: userReducer,
  modal: modalReducer,
});

/* eslint-disable no-underscore-dangle */
const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
/* eslint-enable */

const store = createStore(rootReducer, reduxDevTools);

export default store;
