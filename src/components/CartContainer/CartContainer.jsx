import { useContext } from "react";
import CartContext from "../../CartContext/CartContext";
import "./CartContainer.css";
import { Link } from "react-router-dom";

export default function CartContainer() {
  const { cart, addToCart, removeFromCart, clearCart, cartTotal } =
    useContext(CartContext);

  const handleAddQuantity = (product) => {
    addToCart(product, 1);
  };

  const handleRemoveQuantity = (product) => {
    removeFromCart(product.id, 1);
  };

  return (
    <div className="cartBox">
      <h2>Carrito</h2>
      <div className="cartList">
        {cart.map((item) => (
          <div key={item.product.id} className="itemCartCard">
            <img
              src={item.product.image}
              alt={item.product.title}
              className="itemCartImage"
            />
            <div className="itemCartDetail">
              <h3>{item.product.title}</h3>
              <p>Cantidad: {item.quantity}</p>
              <p>Total ${(item.product.price * item.quantity).toFixed(2)}</p>
            </div>
            <div className="itemCartButtons">
              <button
                onClick={() => handleRemoveQuantity(item.product)}
                className="itemCartBtn"
              >
                -
              </button>
              <button
                onClick={() => handleAddQuantity(item.product)}
                className="itemCartBtn"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="cartTotal">
        <h3>Total: ${cartTotal}</h3>
      </div>
      <Link to="/checkout" className="confirmCartBtn">
        Confirmar compra
      </Link>

      <button onClick={clearCart} className="clearCartBtn">
        Limpiar carrito
      </button>
    </div>
  );
}
