import ItemList from "../Items/ItemList";
import useProducts from "../../hooks/useProducts";
import "./ItemListContainer.css";

function ItemListContainer({ greeting }) {
  const { products, isLoading } = useProducts();

  if (isLoading) return <h2 className="greeting">Cargando...</h2>;

  return (
    <div>
      <h2 className="greeting">{greeting}</h2>
      <ItemList products={products} />
    </div>
  );
}

export default ItemListContainer;
