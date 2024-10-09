import "./styles.css";
import { useEffect, useState } from "react";
import Products from "./components/Products";
import AddToCart from "./components/AddToCart";
import Cart from "./components/Cart";

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
    <div className="App">
      <Cart cart={cart} />
      <Products
      increaseQuantity={increaseQuantity}
      decreaseQuantity={decreaseQuantity}  //passing as props(from parent to child)
      cart={cart}
      />
    </div>
  );
   
}
