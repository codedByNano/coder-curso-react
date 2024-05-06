import { useEffect, useState } from "react";
import { itemById } from "../mock/asyncMock";

export default function useById(id) {
  const [item, setItem] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    itemById(id)
      .then((data) => {
        setItem(data);
      })
      .finally(() => setIsLoading(false));
  }, [id]);

  return { item, isLoading, setIsLoading };
}
