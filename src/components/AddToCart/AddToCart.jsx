import { useContext } from "react";
import CartContext from "../../context/CartContext";

function AddToCart({product})
{
  const { cart, increaseQuantity, decreaseQuantity } = useContext(CartContext);
  console.log({cart});
  function increment()
  {
    console.log('increment');
    increaseQuantity(product);
  }

  function decrease()
  {
    console.log('decrement');
    decreaseQuantity(product);
  }
//check item quantity in the cart then show +- button else show the add to cart button.
const quantity=cart[product.id]?cart[product.id].quantity:0;//check if cart[product.id] is not null(if product is in cart ) then use (cart[product.id].quantity) else use (0)
if(quantity===0)
{
    return (
     <div><button onClick={increment} >Add to Cart</button></div>
        )
}
else
   {
   return (
    <div >
           <button onClick={decrease} >-</button>

     <span>{quantity}</span>
     <button onClick={increment}>+</button>
    </div>


        )
   }

}
export default AddToCart;
