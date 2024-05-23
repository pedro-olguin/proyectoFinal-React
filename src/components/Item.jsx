import React from "react";
import useCount from "../hooks/useCount";
import "../styles/Item.css";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  const onAdd = (nombredelItem, cantidadDeItem) => {
    console.log("Nombre del Producto: ", nombredelItem);
    console.log("Cantidad de Productos: ", cantidadDeItem);
  };

  return (
    <div>
      <div>
        <div className="cartContainer">
          <Link to={`/producto/${item.id}`}>
            <img className="cartImg" src={item.img} alt={item.descripcion} />
          </Link>
          <div className="cartText">
            <Link to={`/producto/${item.id}`}>
              <h4>{item.titulo}</h4>
            </Link>
            <p>{item.descripcion}</p>
            <p>${item.precio}</p>
            <Link to={`/producto/${item.id}`}>
              <button className="btnAdd" onClick={() => onAdd(item, count)}>
                Seleccionar
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
