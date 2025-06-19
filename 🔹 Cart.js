const Cart = () => {
  const cartItems = useSelector(state => state.cart);
  return (
    <div>
      {cartItems.map(item => (
        <div>{item.name} - ₹{item.price}</div>
      ))}
    </div>
  );
}
