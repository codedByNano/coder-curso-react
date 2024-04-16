import CartWidget from "../CartWidget/CartWidget";
import CategoryList from "../CategoryList/CategoryList";
import "./navbar.css"

function NavBar() {
  return (
    <div className="navbar">
      <CategoryList />
      <CartWidget />
    </div>
  );
}

export default NavBar;
