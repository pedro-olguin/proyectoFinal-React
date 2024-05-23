import ItemList from "./ItemList";
import "../styles/ItemListContainer.css";
import useProducts from "../hooks/useProducts";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import useProductsByCategory from "../hooks/useProductsByCategory";

function ItemListContainer({ contenido }) {
  const { productos, setProductos, cargando, setCargando } = useProducts();
  const {
    productos: products,
    setProductos: setProducts,
    cargando: loading,
    setCargando: setLoading,
  } = useProductsByCategory();

  const params = useParams();

  useEffect(() => {
    if (params.categoryName) {
      useProductsByCategory(params.categoryName)
        .then((data) => {
          setProducts(data);
        })
        .finally(() => setLoading(false));
    } else {
      useProducts()
        .then((data) => {
          setProductos(data);
        })
        .finally(() => setCargando(false));
    }
  }, [params.categoryName]);

  if (cargando || loading) return <h1 className="cargando">Cargando...</h1>;

  return (
    <div>
      <h1>{contenido}</h1>
      <ItemList productos={productos || products} />
    </div>
  );
}

export default ItemListContainer;
