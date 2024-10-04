function AddToCart()
{
  function increment()
  {
    console.log('increment');
  }
    return (
     <div><button onClick={increment} >Add to Cart</button></div>
        )
}
export default AddToCart;