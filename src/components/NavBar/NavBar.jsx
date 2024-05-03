import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import CategoryList from "../CategoryList/CategoryList";
import Brand from "../Brand/Brand";

function NavBar() {
  return (
    <header className="header">
      <Brand />
      <div className="navbar">
        <CategoryList />
        <CartWidget />
      </div>
    </header>
  );
}

export default NavBar;
