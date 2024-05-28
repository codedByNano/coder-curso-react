import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function useItem() {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const q = query(
      collection(db, "products"),
      where("id", "==", parseInt(id))
    );

    getDocs(q)
      .then((snapshot) => {
        if (!snapshot.empty) {
          const firstDoc = snapshot.docs[0];
          setItem(firstDoc.data());
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return { item, loading };
}
