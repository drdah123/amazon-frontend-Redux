import { applyMiddleware, createStore } from 'redux';
import storeReducer from './Redux/reducers/main';
import thunk from 'redux-thunk';

export const storeRedux = createStore(storeReducer, applyMiddleware(thunk));
