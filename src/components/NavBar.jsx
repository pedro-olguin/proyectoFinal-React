import CartWidget from "./CartWidget";
import CategoryList from "./CategoryList";
import "../styles/NavBar.css";
import CartContext from "../contexts/CartContext";
import { useContext } from "react";

function NavBar() {
  const { cart } = useContext(CartContext);

  return (
    <div className="navegador">
      <CategoryList />
      <div className={`${cart.length === 0 ? "ocultar" : ""}`}>
        <CartWidget />
      </div>
    </div>
  );
}

export default NavBar;
