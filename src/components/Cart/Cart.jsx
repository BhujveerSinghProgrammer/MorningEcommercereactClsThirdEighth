
import useWindowSize from "../../hooks/useWindowSize";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
function Cart()
{
  const { cart } = useContext(CartContext);
  const cartList=cart? Object.values(cart):[];
  console.log('carted' + cartList);
  let { width, height } = useWindowSize();
  console.log(width);

// if(width>720)
// {
  return (
    <div>
      <ul>
        {cartList.map((item) => (
          <li key={item.id}>
            {item.title} {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
//}

// else
// {
// return null;
// }


}

export default Cart;