import "./ItemDetailContainer.css";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import useById from "../../hooks/useById";
import ItemCounter from "../ItemCounter/ItemCounter";
import useCount from "../../hooks/useCount";
import CartContext from "../../CartContext/CartContext";

export default function ItemDetailContainer() {
  const { id } = useParams();
  const { item, isLoading, setIsLoading } = useById(id);
  const { count, increase, decrease, reset } = useCount();
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(item, count);
    reset();
  };

  useEffect(() => {
    setIsLoading(true);
  }, [id, setIsLoading]);

  if (isLoading) return <h2 className="title">Cargando...</h2>;

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
