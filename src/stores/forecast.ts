import { createSlice } from '@reduxjs/toolkit';

// Stateの初期状態
const initialState = {
  date: new Date(),
  summary: '',
  temperatureMax: 0,
  temperatureMin: 0,
  icon: 'sun',
};

// Sliceを生成する
const forecastSlice = createSlice({
  name: 'forecast',
  initialState,
  reducers: {
    setName: (state, action) => {
      return { ...state, name: action.payload };
    },
    clearName: (state) => {
      return { ...state, name: '' };
    },
    // etc...
  },
});

// Reducerをエクスポートする
export const forecastReducer = forecastSlice.reducer;

// Action Creatorsをエクスポートする
export const { setName, clearName } = forecastSlice.actions;
