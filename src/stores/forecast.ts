import { createSlice, Dispatch } from '@reduxjs/toolkit';
import { getForecasts } from '../firebase/firestore';

const initialForecast = {
  date: new Date(),
  summary: '',
  temperatureMax: 0,
  temperatureMin: 0,
  icon: 'question',
};

const initialState = {
  tokyo: initialForecast,
  osaka: initialForecast,
  nagoya: initialForecast,
  morioka: initialForecast,
};

const forecastSlice = createSlice({
  name: 'forecast',
  initialState,
  reducers: {
    setForecast: (prevState, action) => {
      return { ...initialState, ...prevState, ...action.payload };
    },
    resetForecast: () => initialState,
  },
});

export const { setForecast, resetForecast } = forecastSlice.actions;
export const forecastReducer = forecastSlice.reducer;

export const fetchForecast = () => {
  return async (dispatch: Dispatch) => {
    const tokyoForecast = await getForecasts('tokyo');
    const osakaForecast = await getForecasts('osaka');
    const nagoyaForecast = await getForecasts('nagoya');
    const moriokaForecast = await getForecasts('morioka');
    dispatch(setForecast({ tokyo: tokyoForecast }));
    dispatch(setForecast({ osaka: osakaForecast }));
    dispatch(setForecast({ nagoya: nagoyaForecast }));
    dispatch(setForecast({ morioka: moriokaForecast }));
  };
};
