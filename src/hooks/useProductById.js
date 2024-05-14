import { useEffect, useState } from "react";
import { getProductById } from "../mock/asyncMock";

export default function useProductById(productoId) {
  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);
  console.log({ productoId });

  useEffect(() => {
    getProductById(productoId)
      .then((data) => {
        console.log({ productoId });
        setProducto(data);
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
