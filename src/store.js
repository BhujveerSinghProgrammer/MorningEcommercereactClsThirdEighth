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
  switch (action.type) 
  {
    case "ADD_TO_CART":{
      console.log(action.payload);
      return state;
    }

   case "REMOVE_FROM_CART":{
      console.log(action.payload);
      return state;
    }
   default: return state;


  }
  }

  const store=createStore(cartReducers);
   export default store;
