import "./ProductCard.css"

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
       <span> {props.product.title} </span>
      <div>{props.product.price}</div>
    </div>
  );
 }
