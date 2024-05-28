import { useEffect } from "react";
import useProducts from "../../hooks/useProducts";
import ItemList from "../Items/ItemList";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";

export default function ItemListContainer({ greeting }) {
  const { loading, setLoading, products } = useProducts();
  const { type } = useParams();

  useEffect(() => {
    setLoading(true);
  }, [type]);

  if (loading) return <h2 className="greeting">Cargando...</h2>;

  return (
    <div>
      <h2 className="greeting">{greeting}</h2>
      <ItemList products={products} />
    </div>
  );
}
