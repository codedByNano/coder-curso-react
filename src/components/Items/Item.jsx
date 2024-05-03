import "./Item.css";
import useCount from "../../hooks/useCount";
import ItemCounter from "../ItemCounter/ItemCounter";

export default function Item({ item }) {
  const { count, increase, decrease } = useCount();

  const onAdd = (itemName, itemAmount) => {
    console.log("Nombre:", itemName);
    console.log("Cantidad:", itemAmount);
  };

  return (
    <div className="itemCard">
      <div className="itemImg">
        <img src={item.image} alt={item.title} />
      </div>
      <h3 className="itemTitle">{item.title}</h3>
      <p className="itemInfo">{item.description}</p>
      <p className="itemPrice">${item.price}</p>
      <div className="cartBox">
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
  );
}
