import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import products_reducer from '../reducers/fetchProductsReducer'
import cart_reducer from '../reducers/shoppingCartReducer';
import filter_reducer from '../reducers/filterReducer'
import thunk from 'redux-thunk'

const initialState = {}

const rootReducer = combineReducers({
  products_stuff: products_reducer,
  cart_stuff: cart_reducer,
  filter_stuff: filter_reducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer,initialState, composeEnhancers(applyMiddleware(thunk)))

export default store