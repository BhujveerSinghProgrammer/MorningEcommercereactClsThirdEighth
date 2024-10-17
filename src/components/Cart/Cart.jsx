import "../../styles.css";
import useWindowSize from "../../hooks/useWindowSize";
import { useContext } from "react";
import CartContext from "../../context/CartContext";

function Cart()
{
  const { cart } = useContext(CartContext);
  const cartList=cart? Object.values(cart):[];
  let { width, height } = useWindowSize();
  console.log(width);

// if(width>720)
// {
  return (
    <div className="dummy">
      <ul>
        {cartList.map((item) => {
          <li key={item.id}>
            {item.title} {item.quantity}
          </li>
})}
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