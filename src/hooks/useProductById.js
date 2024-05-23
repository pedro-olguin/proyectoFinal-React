import { useEffect, useState } from "react";

import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

export default function useProductById(productoId) {
  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const bd = getFirestore();

    const q = query(collection(bd, "productos"), where("id", "==", productoId));

    getDocs(q)
      .then((snapshot) => {
        setProducto(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      })
      .finally(() => {
        setCargando(false);
      });
  }, [productoId]);

  return {
    producto,
    cargando,
  };
}
