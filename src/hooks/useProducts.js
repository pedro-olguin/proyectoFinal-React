import { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";

console.log({ getFirestore });

export default function useProducts() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const bd = getFirestore();

    const productsCollections = collection(bd, "productos");

    getDocs(productsCollections)
      .then((snapshot) => {
        setProductos(snapshot.docs.map((doc) => doc.data()));
      })
      .finally(() => {
        setCargando(false);
      });
  }, []);

  return { productos, setProductos, cargando, setCargando };
}
