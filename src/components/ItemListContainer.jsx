import ItemList from "./ItemList";
import "../styles/ItemListContainer.css";
import useProducts from "../hooks/useProducts";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getProductByCategory, getProducts } from "../mock/asyncMock";

function ItemListContainer({ contenido }) {
  const { productos, setProductos, cargando, setCargando } = useProducts();

  const params = useParams();

  useEffect(() => {
    if (params.categoryName) {
      getProductByCategory(params.categoryName)
        .then((data) => {
          setProductos(data);
        })
        .finally(() => setCargando(false));
    } else {
      getProducts()
        .then((data) => {
          setProductos(data);
        })
        .finally(() => setCargando(false));
    }
  }, [params.categoryName]);

  if (cargando) return <h1 className="cargando">Cargando...</h1>;

  return (
    <div>
      <h1>{contenido}</h1>
      <ItemList productos={productos} />
    </div>
  );
}

export default ItemListContainer;
