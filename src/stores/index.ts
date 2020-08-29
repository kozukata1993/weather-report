import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './counter';
import { forecastReducer } from './forecast';
import { messageReducer } from './message';
import { isLoadingReducer } from './loading';

const reducer = combineReducers({
  counter: counterReducer,
  forecasts: forecastReducer,
  message: messageReducer,
  loading: isLoadingReducer,
});

const store = configureStore({ reducer });

export default store;
