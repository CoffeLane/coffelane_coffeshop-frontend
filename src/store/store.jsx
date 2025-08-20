import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import productsReducer from './slice/productsSlice.jsx';
import cartReducer from './slice/cartSlice.jsx';



const rootPersistConfig = {
    key: 'root',
    storage,
    whitelist: ['products', 'cart'],
};

const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer,

});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persistor = persistStore(store);

