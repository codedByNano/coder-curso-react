import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function useItem() {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemDoc = doc(db, "products", id);
    console.log(itemDoc);

    getDoc(itemDoc)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setItem({ id: snapshot.id, ...snapshot.data() });
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return { item, loading };
}