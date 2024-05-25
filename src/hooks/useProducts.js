import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

export default function useProducts(categoryName) {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const bd = getFirestore();

    const productsCollection = collection(bd, "productos");
    if (categoryName) {
      const productsQuery = query(
        productsCollection,
        where("categoria", "==", categoryName)
      );
      getDocs(productsQuery)
        .then((snapshot) => {
          setProductos(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
          );
        })
        .finally(() => setCargando(false));
    } else {
      getDocs(productsCollection)
        .then((snapshot) => {
          setProductos(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
          );
        })
        .finally(() => setCargando(false));
    }
  }, [categoryName]);

  return { productos, cargando };
}
