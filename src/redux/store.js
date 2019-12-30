import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import userReducer from './reducers/userReducer';
import modalReducer from './reducers/modalReducer';
import loaderReducer from './reducers/loaderReducer';
import menuReducer from './reducers/menuReducer';

const rootReducer = combineReducers({
  user: userReducer,
  modal: modalReducer,
  loader: loaderReducer,
  menu: menuReducer,
});

const middleWares = [thunk];
const enhancer = composeWithDevTools(applyMiddleware(...middleWares));

const store = createStore(rootReducer, enhancer);

export default store;
