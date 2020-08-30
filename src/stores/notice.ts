import { createSlice, Dispatch } from '@reduxjs/toolkit';
import { getNotices } from '../firebase/firestore';

export const initialState = null;

const noticesSlice = createSlice({
  name: 'notices',
  initialState,
  reducers: {
    setNotices: (prevState, action) => {
      return action.payload;
    },
    resetNotices: () => initialState,
  },
});

export const { setNotices, resetNotices } = noticesSlice.actions;
export const noticesReducer = noticesSlice.reducer;

export const fetchNotices = () => {
  return async (dispatch: Dispatch): Promise<void> => {
    const notices = await getNotices();
    dispatch(setNotices(notices));
  };
};
