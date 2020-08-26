import { createSlice } from '@reduxjs/toolkit';

// Stateの初期状態
const initialState = {
  count: 0,
};

// Sliceを生成する
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: ({ count }) => {
      return { count: count + 1 };
    },
    decrement: ({ count }) => {
      return { count: count - 1 };
    },
  },
});

// Reducerをエクスポートする
export const counterReducer = counterSlice.reducer;

// Action Creatorsをエクスポートする
export const { increment, decrement } = counterSlice.actions;
