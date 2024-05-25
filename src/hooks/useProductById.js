import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function useProductById(productoId) {
  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const bd = getFirestore();

    const query = doc(bd, "productos", productoId);
    getDoc(query)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setProducto({
            id: snapshot.id,
            ...snapshot.data(),
          });
        }
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
