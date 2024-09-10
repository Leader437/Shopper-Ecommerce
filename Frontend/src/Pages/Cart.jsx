import CartCheckout from "../Components/CartCheckout/CartCheckout"
import CartItems from "../Components/CartItems/CartItems"

const Cart = () => {
  return (
    <div className="container">
      <CartItems/>
      <CartCheckout/>
    </div>
  )
}

export default Cart