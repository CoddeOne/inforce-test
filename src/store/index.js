import { configureStore } from '@reduxjs/toolkit';

import api from '../api';
import sortReducer from './sort';

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        sort: sortReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});

export default store;
