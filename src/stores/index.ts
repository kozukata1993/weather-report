import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './counter';
import { forecastReducer } from './forecast';
import { messageReducer } from './message';

const reducer = combineReducers({
  counter: counterReducer,
  forecasts: forecastReducer,
  message: messageReducer,
});

const store = configureStore({ reducer });

export default store;
