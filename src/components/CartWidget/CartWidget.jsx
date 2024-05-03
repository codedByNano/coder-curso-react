import { useState } from "react";
import CartIcon from "./CartIcon";
import "./CartWidget.css";

function CartWidget() {
  const [cartItems, setCartItems] = useState(7);

  return (
    <div className="cart">
      <CartIcon width={35} height={35} />
      <span>{cartItems}</span>
    </div>
  );
}

export default CartWidget;
