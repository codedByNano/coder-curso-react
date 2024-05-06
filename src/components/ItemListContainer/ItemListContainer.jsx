import ItemList from "../Items/ItemList";
import useByCategory from "../../hooks/useByCategory";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import useProducts from "../../hooks/useProducts";

export default function ItemListContainer({ greeting }) {
  const { type } = useParams();
  const { products, isLoading, setIsLoading } = type
    ? useByCategory(type)
    : useProducts();

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
