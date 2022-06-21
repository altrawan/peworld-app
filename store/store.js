/* eslint-disable import/no-mutable-exports */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createWrapper } from 'next-redux-wrapper';
import rootReducers from 'store/reducers';
import { NODE_ENV } from 'helpers/env';

const persistConfig = {
  key: 'root',
  storage,
};

// middleware
const persistedReducer = persistReducer(persistConfig, rootReducers);
const middleware = applyMiddleware(thunk);

// creating store
let store = null;
if (NODE_ENV === 'production') {
  store = createStore(persistedReducer, middleware);
} else {
  store = createStore(
    persistedReducer,
    NODE_ENV === 'production' ? middleware : composeWithDevTools(middleware)
  );
}

// assigning store to next wrapper
const makeStore = () => store;
const persistor = persistStore(store);
const wrapper = createWrapper(makeStore);

export { store, persistor, wrapper };
