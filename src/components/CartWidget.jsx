import CartIcon from "./CartIcon";
import "../styles/CartWidget.css";
import { Link } from "react-router-dom";

function CartWidget() {
  return (
    <div>
      <Link className="a--cart" to="/Cart">
        <CartIcon ancho={"35px"} alto={"40px"} />
        <span className="cart--number">2</span>
      </Link>
    </div>
  );
}

export default CartWidget;
