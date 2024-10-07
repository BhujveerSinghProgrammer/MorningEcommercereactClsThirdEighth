

function Cart({cart})
{
  const cartList=cart? Object.values(cart):[];
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

export default Cart;