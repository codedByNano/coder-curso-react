import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import CategoryList from "../CategoryList/CategoryList";
import Brand from "../Brand/Brand";
import { useContext } from "react";
import CartContext from "../../CartContext/CartContext";

function NavBar() {
  const { cart } = useContext(CartContext);

  return (
    <header className="header">
      <Brand />
      <div className="navbar">
        <CategoryList />
        <div className={`${cart.length === 0 ? "hidden" : ""}`}>
          <CartWidget />
        </div>
      </div>
    </header>
  );
}

export default NavBar;
