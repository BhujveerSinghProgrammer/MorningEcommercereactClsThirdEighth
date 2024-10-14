import "./styles.css";
import { useEffect, useState } from "react";
import Products from "./components/Products";
import AddToCart from "./components/AddToCart";
import Cart from "./components/Cart";
import CartContext from "./context/CartContext";

import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import { Switch, Route } from "react-router-dom";


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
        <CartContext.Provider value={{ cart, increaseQuantity, decreaseQuantity }}>
     <div className="App">
<Switch>
          <Route exact={true} path="/" component={ProductsPage} />
          <Route exact={true} path="/cart" component={CartPage} />
</Switch>
      {/* <Cart />
      <Products /> */}
    </div>
 </CartContext.Provider>
   
  );
   
}

// if route === "cart" display cart component
// if route === "product" dispaly product component

