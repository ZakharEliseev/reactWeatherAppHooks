import { combineReducers } from '@reduxjs/toolkit';

import { Api } from '../WeatherApi';

export const rootReducer = combineReducers({
  [Api.reducerPath]: Api.reducer,

});

export type RootState = ReturnType<typeof rootReducer>;
