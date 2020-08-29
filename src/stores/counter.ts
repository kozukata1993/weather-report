import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
};

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

export const counterReducer = counterSlice.reducer;
export const { increment, decrement } = counterSlice.actions;
