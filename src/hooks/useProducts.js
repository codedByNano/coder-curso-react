import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { type } = useParams();

  useEffect(() => {
    const db = getFirestore();

    let productsCollection = collection(db, "products");

    if (type) {
      productsCollection = query(productsCollection, where("type", "==", type));
    }

    getDocs(productsCollection)
      .then((snapshot) => {
        setProducts(snapshot.docs.map((doc) => doc.data()));
      })
      .finally(() => {
        setLoading(false);
      });
  }, [type]);

  return {
    products,
    loading,
    setLoading,
  };
}
