import "./ProductCard.css"

import AddToCart from "../AddToCart";

//  export default function ProductCard(props) {
//   return <div>
//     Product Card 
// <span>{props.name}</span>
// <div>{props.price}</div>
//   </div>;
//  }


export default function ProductCard({product,increaseQuantity,decreaseQuantity,cart}) {
   return (
    <div className="card">
       <h2> {product.title} </h2>
       <h4>{product.price.value}</h4>
       <AddToCart
       product={product}
      increaseQuantity={increaseQuantity}
      decreaseQuantity={decreaseQuantity}
      cart={cart}
      />
    </div>
  );
 }
