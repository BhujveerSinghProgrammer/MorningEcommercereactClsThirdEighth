// action
// manipulate the state
// items = cart
// cart {{}, {}, {}}

// newCart = {{}, {}, {}, {}}

// action: {type, payload}
// import { createStore } from "redux";
import { legacy_createStore as createStore } from 'redux';
import { omit } from "lodash";

function cartReducers(state = { items: {} }, action) {
  switch (action.type) {
    // increase quantity of a particular item
    // add that item into the cart

    case "ADD_TO_CART": {
      console.log(action.payload);
      const product = action.payload;
      if (state.items[product.id]) {
        return {
          ...state,
          items: {
            ...state.items,
            [product.id]: {
              ...state.items[product.id],
              quantity: state.items[product.id].quantity + 1
            }
          }
        };
      } else {
        return {
          ...state,
          items: {
            ...state.items,
            [product.id]: {
              ...product,
              quantity: 1
            }
          }
        };
      }
    }

    case "REMOVE_FROM_CART": {
      console.log(action.payload);
      const product = action.payload;
      console.log(state);
      if (state.items[product.id].quantity <= 1) {
        return {
          ...state,
          items: omit(state.items, [product.id])
        };
      } else {
        return {
          ...state,
          items: {
            ...state.items,
            [product.id]: {
              ...state.items[product.id],
              quantity: state.items[product.id].quantity - 1
            }
          }
        };
      }
    }

    default:
      return state;
  }
}


  const store=createStore(cartReducers);
   export default store;
