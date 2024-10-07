//Changes
//change 1:- 
// function AddToCart()
// {
//   function increment()
//   {
//     console.log('increment');
//   }
//     return (
//      <div><button onClick={increment} >Add to Cart</button></div>
//         )
// }
// export default AddToCart;

//change 2:-
function AddToCart({product,increaseQuantity,decreaseQuantity,cart})
{
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
    <div>
     <button onClick={increment}>+</button>
     <span>{quantity}</span>
     <button onClick={decrease} >-</button>
    </div>


        )
   }

}
export default AddToCart;
