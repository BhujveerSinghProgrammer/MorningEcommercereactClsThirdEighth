import "./ProductCard.css"

import AddToCart from "../AddToCart";

//  export default function ProductCard(props) {
//   return <div>
//     Product Card 
// <span>{props.name}</span>
// <div>{props.price}</div>
//   </div>;
//  }


export default function ProductCard(props) {
   return (
    <div className="card">
       <h2> {props.product.title} </h2>
       <h4>{props.product.price.value}</h4>
       <AddToCart/>
    </div>
  );
 }
