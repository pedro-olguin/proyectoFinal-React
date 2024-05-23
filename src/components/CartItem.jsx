import { useContext } from "react";
import CartContext from "../contexts/CartContext";
import "../styles/Item.css";

const CartItem = ({ productos }) => {
  const { removeFromCart, addToCart } = useContext(CartContext);
  return (
    <div key={productos} className="cartContainer">
      <div>
        <img
          className="cartImg"
          src={productos.producto.img}
          alt={productos.producto.descripcion}
        />
      </div>
      <div className="cartText">
        <p>{productos.producto.descripcion}</p>
        <p>${productos.producto.precio}</p>
        <p>cantidad: {productos.cantidad}</p>
        <div>
          <button
            className="btnAdd"
            onClick={() => removeFromCart(productos.producto.id, 1)}
          >
            -
          </button>
          <button
            className="btnAdd"
            onClick={() => addToCart(productos.producto, 1)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
