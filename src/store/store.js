import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; 
import { createLogger } from 'redux-logger';
import { clientReducer } from './reducers/clientReducer';
import { productReducer } from './reducers/productReducer';
import { shoppingCartReducer } from './reducers/shoppingCartReducer';
import { wishlistReducer } from './reducers/wishlistReducer';

const logger = createLogger();

const rootReducer = combineReducers({
  client: clientReducer,
  product: productReducer,
  shoppingCart: shoppingCartReducer,
  wishlist: wishlistReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));