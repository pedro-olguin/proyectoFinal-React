import React from "react";
import ItemCount from "./ItemCount";
import "../styles/Item.css";
import { Link } from "react-router-dom";

const ItemDetail = ({ producto }) => {
  return (
    <div>
      <div className="cartContainer">
        <Link to={`/producto/${producto.id}`}>
          <img
            className="cartImg"
            src={producto.img}
            alt={producto.descripcion}
          />
        </Link>
        <div className="cartText">
          <Link to={`/producto/${producto.id}`}>
            <h4>{producto.titulo}</h4>
          </Link>
          <p>{producto.descripcion}</p>
          <p>${producto.precio}</p>
          <div>
            <ItemCount
              stock={producto.stock}
              count={count}
              decrement={decrement}
              increment={increment}
            />
          </div>
          <button className="btnAdd" onClick={() => onAdd(producto, count)}>
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
