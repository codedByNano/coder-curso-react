import "./ItemDetailContainer.css";
import { useContext } from "react";
import ItemCounter from "../ItemCounter/ItemCounter";
import useCount from "../../hooks/useCount";
import CartContext from "../../CartContext/CartContext";
import useItem from "../../hooks/useItem";

export default function ItemDetailContainer() {
  const { count, increase, decrease, reset } = useCount();
  const { addToCart } = useContext(CartContext);
  const { item, loading } = useItem();

  const handleAddToCart = () => {
    addToCart(item, count);
    reset();
  };

  if (loading) return <h2 className="title">Cargando...</h2>;
  if (!item) return <h2 className="title">Producto no encontrado</h2>

  return (
    <div className="itemDisplay">
      <div className="imageContainer">
        <img src={item.image} alt={item.title} className="image" />
      </div>
      <div className="itemDetail"> 
        <h2 className="title">{item.title}</h2>
        <p className="description">{item.description}</p>
        <div className="cartBox">
          <p className="price">$ {item.price}</p>
          <ItemCounter
            stock={item.stock}
            count={count}
            increase={increase}
            decrease={decrease}
          />
          <button
            className="addButton"
            onClick={handleAddToCart}
            disabled={count === 0}
          >
            Agregar al carrito
          </button>
        </div>
        <p style={{ color: "#007bff" }}>
          Quedan <strong>{item.stock - count}</strong> unidades disponibles
        </p>
      </div>
    </div>
  );
}
