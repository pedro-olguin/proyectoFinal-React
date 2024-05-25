import { useContext } from "react";
import CartContext from "../contexts/CartContext";
import CartItem from "./CartItem";
import "../styles/CartContainer.css";
import { Link } from "react-router-dom";

const CartContainer = () => {
  const { cart, clearCart, cartTotal } = useContext(CartContext);

  return (
    <div>
      <h3 className="CartTitle">Carrito</h3>
      <div>
        <div>
          {cart.length === 0 ? (
            <h1>No hay productos en el carrito</h1>
          ) : (
            cart.map((productos) => {
              return (
                <CartItem key={productos.producto.id} productos={productos} />
              );
            })
          )}
          <div>
            <div className="totalPrice">
              <h4>Total: ${cartTotal}</h4>
            </div>
            <div>
              <button className="clearBtn btnAdd" onClick={clearCart}>
                Limpiar Carrito
              </button>
              <Link className="btnAdd" to="/Checkout">
                Terminar Compra
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartContainer;
