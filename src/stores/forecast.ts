import { createSlice, Dispatch } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { getForecast } from '../firebase/firestore';

const initialForecast = () => ({
  id: uuidv4(),
  date: new Date(),
  summary: '',
  temperatureMax: 0,
  temperatureMin: 0,
  icon: 'question',
});

export const initialState = {
  tokyo: initialForecast(),
  osaka: initialForecast(),
  nagoya: initialForecast(),
  morioka: initialForecast(),
};

const forecastSlice = createSlice({
  name: 'forecast',
  initialState,
  reducers: {
    setForecast: (prevState, action) => {
      console.log('setForecast', action.payload);

      return { ...initialState, ...prevState, ...action.payload };
    },
    resetForecast: () => initialState,
  },
});

export const { setForecast, resetForecast } = forecastSlice.actions;
export const forecastReducer = forecastSlice.reducer;

export const fetchForecast = () => {
  return async (dispatch: Dispatch) => {
    const tokyoForecast = await getForecast('tokyo');
    const osakaForecast = await getForecast('osaka');
    const nagoyaForecast = await getForecast('nagoya');
    const moriokaForecast = await getForecast('morioka');
    dispatch(setForecast({ tokyo: tokyoForecast }));
    dispatch(setForecast({ osaka: osakaForecast }));
    dispatch(setForecast({ nagoya: nagoyaForecast }));
    dispatch(setForecast({ morioka: moriokaForecast }));
  };
};
