import { configureStore } from '@reduxjs/toolkit';
import createSageMiddleware from 'redux-saga';
import rootSaga from './sagas';
import rootReducer from './reducers';

const sagaMiddleware = createSageMiddleware();

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware({ thunk: false }).prepend(sagaMiddleware);
    },
});

sagaMiddleware.run(rootSaga);
