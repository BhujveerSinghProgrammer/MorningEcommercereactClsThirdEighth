import "./ProductCard.css"

import AddToCart from "../AddToCart";
import Rating from "../Rating";


export default function ProductCard({product,increaseQuantity,decreaseQuantity,cart}) {
   return (
    <div className="card">
       <h2> {product.title} </h2>
       <h4>{product.price.value}</h4>

       <Rating/>


       <AddToCart
       product={product}
      increaseQuantity={increaseQuantity}
      decreaseQuantity={decreaseQuantity}
      cart={cart}
      />



    </div>
  );
 }
