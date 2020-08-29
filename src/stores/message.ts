import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  visible: false,
  text: '',
  color: 'teal',
};

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    visible: (prevState, { payload }) => {
      return { ...initialState, visible: true, text: payload.text, color: payload.color };
    },
    invisible: () => {
      return initialState;
    },
  },
});

export const messageReducer = messageSlice.reducer;
export const { visible, invisible } = messageSlice.actions;
