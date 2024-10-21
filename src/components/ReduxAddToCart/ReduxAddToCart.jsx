import { useDispatch, useSelector } from "react-redux";
function ReduxAddToCart({ product }) {
  let dispatch = useDispatch();
  // useSelector is a hook that takes call as the param
  // the callback has the state in it as a parameter
  console.log("add to cart", product.id);
   let quantity = useSelector((state) => {
     return state.items[product.id]?.quantity || 0;
   });

  //  let quantity = useSelector((state) => {
  //   return state.items;
  // });

  function increment() {
    dispatch({ type: "ADD_TO_CART", payload: product });
  }

  function decrease() {
    dispatch({ type: "REMOVE_FROM_CART", payload: product });
  }
  // check item quantity in the cart then show either + and - or show add to cart
  //const quantity = cart[product.id] ? cart[product.id].quantity : 0;
  if (quantity === 0) {
    return (
      <div>
        <button onClick={increment}> Add to Cart</button>
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={decrease}> - </button>
        <span> {quantity} </span>
        <button onClick={increment}> + </button>
      </div>
    );
  }
}

export default ReduxAddToCart;
