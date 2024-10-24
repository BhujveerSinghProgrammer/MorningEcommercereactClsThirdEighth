import "./ProductCard.css"

import AddToCart from "../AddToCart";
import Rating from "../Rating";


import ReduxAddToCart from "../ReduxAddToCart";
export default function ProductCard({product,increaseQuantity,decreaseQuantity,cart}) {
     console.log("ProductCart", product.id);
   return (
    <div className="card">
       <h2> {product.title} </h2>
       <h4>{product.price.value}</h4>

       <Rating rating={product.rating.value} maxrating={5} />


       {/* <AddToCart
       product={product}
      increaseQuantity={increaseQuantity}
      decreaseQuantity={decreaseQuantity}
      cart={cart}
      /> */}

 <ReduxAddToCart product={product} />
 

    </div>
  );
 }


