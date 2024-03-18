import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './playerSlice';
import { youtubeMusicApi } from './youtubeMusicApi';

export const store = configureStore({
    reducer: {
        [youtubeMusicApi.reducerPath]: youtubeMusicApi.reducer,
        player: playerReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(youtubeMusicApi.middleware as any),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
