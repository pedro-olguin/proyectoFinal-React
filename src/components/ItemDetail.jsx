import { useContext } from "react";
import ItemCount from "../components/ItemCount";
import "../styles/Item.css";
import { Link } from "react-router-dom";
import useCount from "../hooks/useCount";
import CartContext from "../contexts/CartContext";

const ItemDetail = ({ producto }) => {
  const { count, decrement, increment } = useCount(0);
  const { addToCart, checkAddToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(producto, count);
    checkAddToCart(producto, count);
  };

  return (
    <>
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
          <p>
            Quedan <strong>{producto.stock - count}</strong> unidades
            disponibles
          </p>
        </div>
        <div>
          <button
            className="btnAdd"
            onClick={handleAddToCart}
            disabled={count === 0}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
