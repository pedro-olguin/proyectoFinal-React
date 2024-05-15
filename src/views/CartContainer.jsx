import { useContext } from "react";
import CartContext from "../contexts/CartContext";
import "../styles/Item.css";
import { Link } from "react-router-dom";

const CartContainer = () => {
  const { cart, clearCart, cartTotal } = useContext(CartContext);

  return (
    <div>
      <h3>Carrito</h3>
      <div className="cartContainer">
        {cart.length === 0 ? (
          <h1>
            No hay productos en el carrito, has click <Link to={"/"}>AQUI</Link>{" "}
            para volver a la Tienda
          </h1>
        ) : (
          cart.map((productos) => {
            return (
              <CartItem key={productos.producto.id} productos={productos} />
            );
          })
        )}

        <div>
          <button className="btnAdd" onClick={clearCart}>
            Limpiar Carrito
          </button>
        </div>
        <h4>Total: ${cartTotal}</h4>
        <div>
          <button
            className="btnAdd"
            onClick={handleAddToCart}
            disabled={count === 0}
          >
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartContainer;
