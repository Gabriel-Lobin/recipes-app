import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../Reducers';

const middleware = [
  thunk,
];

const store = createStore(rootReducer,
  composeWithDevTools(applyMiddleware(...middleware)));

if (window.Cypress) {
  window.store = store;
}

export default store;
