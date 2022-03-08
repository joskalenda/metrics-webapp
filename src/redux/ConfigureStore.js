import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { ContinentReducer } from './Reducers';

const reducers = combineReducers({
  continent: ContinentReducer,
});

export default createStore(reducers, applyMiddleware(thunk, logger));
