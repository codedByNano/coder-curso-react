import "./ItemDetailContainer.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useById from "../../hooks/useById";
import ItemCounter from "../ItemCounter/ItemCounter";
import useCount from "../../hooks/useCount";

export default function ItemDetailContainer() {
  const { id } = useParams();
  const { item, isLoading, setIsLoading } = useById(id);
  const { count, increase, decrease } = useCount();

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
          <button className="addButton" onClick={() => onAdd(item, count)}>
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
}
