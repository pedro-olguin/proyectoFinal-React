import { useEffect, useState } from "react";
import { getProductById } from "../mock/asyncMock";

export default function useProduct(id) {
  const [producto, setProducto] = useState(undefined);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    getProductById(id)
      .then((data) => setProducto(data))
      .finally(() => setCargando(false));
  }, [id]);

  return { producto, setProducto, cargando, setCargando };
}
