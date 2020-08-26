import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

// それぞれ slice.reducer を default export している前提
import { counterReducer } from './counter';

const reducer = combineReducers({
  counter: counterReducer,
});

const store = configureStore({ reducer });

export default store;
