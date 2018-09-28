import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import products_reducer from '../reducers/fetchProductsReducer'
import cart_reducer from '../reducers/shoppingCartReducer';
import filter_reducer from '../reducers/filterReducer'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const initialState = {}

const rootReducer = combineReducers({
  products_stuff: products_reducer,
  cart_stuff: cart_reducer,
  filter_stuff: filter_reducer,
})

const persistConfig = {
  key: 'root',
  storage: storage,
  // stateReconciler: autoMergeLevel2,
  whitelist: ['cart_stuff']
};



const pReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(pReducer,initialState, composeEnhancers(applyMiddleware(thunk)))

export const persistor = persistStore(store);