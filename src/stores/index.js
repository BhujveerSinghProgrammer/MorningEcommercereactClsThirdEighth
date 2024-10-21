import { combineReducers, legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import cartReducer from "./cart";
import categoriesReducer from "./categories";

const reducer = combineReducers({
  cart: cartReducer,
  categories: categoriesReducer
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;

// that redux has only one store
