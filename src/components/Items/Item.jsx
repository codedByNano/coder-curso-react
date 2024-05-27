import "./Item.css";
import useCount from "../../hooks/useCount";
import ItemCounter from "../ItemCounter/ItemCounter";
import { Link } from "react-router-dom";

export default function Item({ item }) {
  const { count, increase, decrease } = useCount();

  const onAdd = (itemName, itemAmount) => {
    console.log("Nombre:", itemName);
    console.log("Cantidad:", itemAmount);
  };

  return (
    <Link to={`/item/${item.id}`} className="itemCard">
      <div className="itemImg">
        <img src={item.image} alt={item.title} />
      </div>
      <h3 className="itemTitle">{item.title}</h3>
      <p className="itemInfo">{item.description}</p>
      <p className="itemPrice">${item.price}</p>
    </Link>
  );
}
