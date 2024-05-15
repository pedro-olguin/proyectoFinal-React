import CartIcon from "./CartIcon";
import "../styles/CartWidget.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../contexts/CartContext";

function CartWidget(cartCount) {
  const { cart } = useContext(CartContext);

  const calcularCantidad = cart.reduce(
    (acc, producto) => acc + producto.cantidad,
    0
  );

  return (
    <div>
      <Link className="a--cart" to="/Cart">
        <CartIcon ancho={"35px"} alto={"40px"} />
        <span className="cart--number">{calcularCantidad}</span>
      </Link>
    </div>
  );
}

export default CartWidget;
