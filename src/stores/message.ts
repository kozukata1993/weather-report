import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  visible: false,
  text: '',
};

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    visible: (prevState, { payload }) => {
      return { visible: true, text: payload.text };
    },
    invisible: () => {
      return initialState;
    },
  },
});

export const messageReducer = messageSlice.reducer;
export const { visible, invisible } = messageSlice.actions;
