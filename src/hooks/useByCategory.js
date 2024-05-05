import { useEffect, useState } from "react";
import { prodByType } from "../mock/asyncMock";

export default function useByCategory(type) {
  const [products, setProducts] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    prodByType(type)
      .then((data) => {
        setProducts(data);
      })
      .finally(() => setIsLoading(false));
  }, [type]);

  return { products, isLoading, setIsLoading };
}
