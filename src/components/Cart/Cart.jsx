
import useWindowSize from "../../hooks/useWindowSize";


function Cart({cart})
{
  const cartList=cart? Object.values(cart):[];
  let { width, height } = useWindowSize();
  console.log(width);

if(width>720)
{
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
}

else
{
return null;
}


}

export default Cart;