import { useEffect, useState } from "react";
import { getProductById } from "../mock/asyncMock";

export default function useProductById(productoId) {
  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    getProductById(productoId)
      .then((data) => {
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
