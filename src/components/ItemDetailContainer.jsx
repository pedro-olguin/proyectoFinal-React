import React from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import useProductById from "../hooks/useProductById";

const ItemDetailContainer = () => {
  const { productoId } = useParams();

  const { producto, cargando } = useProductById(productoId);

  if (cargando) return <h1 className="cargando">Cargando...</h1>;

  if (!producto) return <h1>No existe el producto</h1>;

  return (
    <div>
      <ItemDetail producto={producto} />
    </div>
  );
};

export default ItemDetailContainer;
