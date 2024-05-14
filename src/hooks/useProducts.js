import { useEffect, useState } from "react";
import { getProducts } from "../mock/asyncMock";

export default function useProducts() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    getProducts()
      .then((data) => setProductos(data))
      .finally(() => setCargando(false));
  }, []);

  return { productos, setProductos, cargando, setCargando };
}
