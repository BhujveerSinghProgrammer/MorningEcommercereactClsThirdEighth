import "./styles.css";
import { useEffect, useState } from "react";
// import Products from "./Products"; //1 dot for one folder out/back
//import Products from "./Products/Products";//
import Products from "./Products";// becuase we have created index.js in each folder,its good practice
import AddToCart from "./AddToCart";


//object of object data structure for the cart
// cart = {
// productId: {
//  id: productId,
//  title: title
//  quantity: quantity,
//  price: price
//},
// productId: {
//  id: productId,
//  title: title
//  quantity: quantity,
//  price: price
//}
//}

//cart[1]

//cart = [
//{
//  id: productId,
//  title: title
//  quantity: quantity,
//  price: price
//},
//{
//  id: productId,
//  title: title
//  quantity: quantity,
//  price: price
//}
//]
// loop through the array check each objects id
// then get the id

//[{} , {}, {}]
// { {}, {} , {}}


export default function App() {
  const [cart, setCart] = useState({});

  function increaseQuantity(product) {
    const newCart = { ...cart };
    // ... is spread operator ,copy value ,its deep copy.if we change in newcart then change will affected in cart
//we are copying a deep copy of cart into newcart.

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
     // you have changed a particular key in an object
    // react will never know that the object has changed internally
    // it would not cause the rerender of the component
    // because it would compare the referrence of the old obj and that of the new obj
    // it would have remained same
    // but when you change the referrence react will always cause the rerender

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
      <Products
      increaseQuantity={increaseQuantity}
      decreaseQuantity={decreaseQuantity}  //passing as props(from parent to child)
      cart={cart}
      />
    </div>
  );
   
}


//******************************************************//