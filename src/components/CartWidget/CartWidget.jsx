import { useContext } from "react";
import CartIcon from "./CartIcon";
import "./CartWidget.css";
import CartContext from "../../CartContext/CartContext";
import { Link } from "react-router-dom";

function CartWidget() {
  const { cart } = useContext(CartContext);
  const cartItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Link to={"/cart"} className="cart">
      <CartIcon width={35} height={35} />
      <span>{cartItems}</span>
    </Link>
  );
}

export default CartWidget;
