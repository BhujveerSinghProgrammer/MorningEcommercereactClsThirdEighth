import {useEffect, useState,memo} from "react";

import ProductCard from "../ProductCard";
import { Link } from "react-router-dom"; 

// const products = [
//   {
//     id:1,
//     title: "Apple",
//     price: "100000",
//   },
//   {
//     id:2,
//     title: "Samsung",
//     price: "30000",
//   },
//   {
//     id:3,
//     title: "Moto",
//     price: "115000",
//   }
// ];

//Api call to get the data 
export default memo (function Products({increaseQuantity,decreaseQuantity,cart}) {
  let [gp,setGp]=useState([]);
let [isLoading,setLoading]=useState(true);
useEffect(
    function () {
  
      fetch("https://602fc537a1e9d20017af105e.mockapi.io/api/v1/products")
        .then((res) => {
          return res.json();
        })
        .then((response) => {
          setGp(response);
          setLoading(false);
        });
    },
    [gp]
  );

if(isLoading){
  // return (<img alt="loader" src="../Loading.gif"/>);
  return (<div>Loading...</div>)
}
else
{
  return (
    <div>
        <Link to="/cart">View Cart </Link>

       {gp.map((product) => {
        return <ProductCard
         product={product}
         key={product.id} 
      increaseQuantity={increaseQuantity}
      decreaseQuantity={decreaseQuantity}
      cart={cart}

        />; 
      })}
    </div>
  );
}

});
