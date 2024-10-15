import "./styles.css";
import { useEffect, useState } from "react";

//import Products from "./components/Products";
//import AddToCart from "./components/AddToCart";


//import Cart from "./components/Cart";

import CartContext from "./context/CartContext";

import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import { Switch, Route } from "react-router-dom";

import NotFound from "./pages/NotFound";

export default function App() {
  const [cart, setCart] = useState({});

  function increaseQuantity(product) {
    const newCart = { ...cart };
    if (!newCart[product.id]) {
      newCart[product.id] = {
        id: product.id,
        title: product.title,
        price: product.price.value,
        quantity: 0
      };
    }
    newCart[product.id].quantity += 1;
    setCart(newCart);
  }  
  function decreaseQuantity(product) {
    const newCart = { ...cart };
    if (!newCart[product.id]) return;//it will return if the cart doesnt have the product.id in newcart.
    newCart[product.id].quantity -= 1;
    if (newCart[product.id].quantity <= 0) {
      delete newCart[product.id];//it will delete a key from an object if the quanity from the cart is 0.
    }
    setCart(newCart);
  }
 
  return (
//wrapped everything in CartContext
        <CartContext.Provider value={{ cart, increaseQuantity, decreaseQuantity }}>
     <div className="App">
         <Switch> //using switch it stops after one route.
          <Route exact={true} path="/" component={ProductsPage} />// exact matching we are using exact={true}
          <Route exact={true} path="/cart" component={CartPage} />
            <Route component={NotFound} />
        </Switch>

       {/* <Cart />
      <Products />  */}
    </div>
 </CartContext.Provider>
   
  );
   
}

// if route === "cart" display cart component
// if route === "product" dispaly product component

// context api
// redux
//mobx

//context api
// somehow to provide this global state
// somehow use this state in the components

// Redux
// Redux is state management tool
// it provides you with a global state
// it would provide you with a way in which you can update this global state
//Global state
// way to update this global state
// way to consume this global state
// Way to wrap this gloabl state with all the components

// Provider

//Store
// State  // db
// Reducer  // controller

// Action
// Dipatch

// Action =>  dipatched =>  reducer => Manipulate state
// => Manipulated state provided again to all components
// => Provider
