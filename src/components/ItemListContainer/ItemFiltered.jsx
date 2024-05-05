import ItemList from "../Items/ItemList";
import useByCategory from "../../hooks/useByCategory";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export default function ItemFiltered({ greeting }) {
  const { type } = useParams();
  const { products, isLoading, setIsLoading } = useByCategory(type);

  useEffect(() => {
    setIsLoading(true);
  }, [type, setIsLoading]);

  if (isLoading) return <h2 className="greeting">Cargando...</h2>;

  return (
    <div>
      <h2 className="greeting">{greeting}</h2>
      <ItemList products={products} />
    </div>
  );
}
