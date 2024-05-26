import ItemList from "./ItemList";
import "../styles/ItemListContainer.css";
import useProducts from "../hooks/useProducts";
import { useParams } from "react-router-dom";
import SpinnerLoading from "./SpinnerLoading";

function ItemListContainer({ contenido }) {
  const { categoryName } = useParams();

  const { productos, cargando } = useProducts(categoryName);

  if (cargando) return <SpinnerLoading />;

  return (
    <div>
      <h1>{contenido}</h1>
      <ItemList productos={productos} />
    </div>
  );
}

export default ItemListContainer;
