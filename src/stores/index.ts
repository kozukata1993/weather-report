import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './counter';
import { forecastReducer } from './forecast';

const reducer = combineReducers({
  counter: counterReducer,
  forecasts: forecastReducer,
});

const store = configureStore({ reducer });

export default store;
