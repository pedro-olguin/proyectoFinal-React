import { useContext } from "react";
import useBuyer from "../hooks/useBuyer";
import CartContext from "../contexts/CartContext";
import CartDetails from "./CartDetails";
import "../styles/CheckoutContainer.css";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import Swal from "sweetalert2";

export default function CheckoutContainer() {
  const { cart, clearCart, cartTotal } = useContext(CartContext);

  const { buyer, handleInputChange } = useBuyer();

  const handleSubmit = (e) => {
    e.preventDefault();

    const order = {
      buyer,
      cart,
      cartTotal,
    };

    const bd = getFirestore();

    const ordersCollection = collection(bd, "orders");

    addDoc(ordersCollection, order).then(({ id }) => {
      Swal.fire({
        icon: "succes",
        title: `Gracias por su compra! ${buyer.nombre}`,
        text: `Tu Numero de comprobante es ${id}`,
        footer: `El Total es de $${cartTotal}`,
      });

      clearCart();
      e.target.reset();
    });
  };

  return (
    <div>
      <form className="card" onSubmit={handleSubmit}>
        <div className="inputsContainer">
          <div className="inputRequired">
            <label>Nombre</label>
            <input
              type="text"
              name="nombre"
              value={buyer.nombre}
              onChange={handleInputChange}
              placeholder="Escribe aqui tu Nombre"
            />
          </div>
          <div className="inputRequired">
            <label>Apellido</label>
            <input
              type="text"
              name="apellido"
              value={buyer.apellido}
              onChange={handleInputChange}
              placeholder="Escribe aqui tu Apellido"
            />
          </div>
          <div className="inputRequired">
            <label>Telefono</label>
            <input
              type="number"
              name="telefono"
              value={buyer.telefono}
              onChange={handleInputChange}
              placeholder="Escribe aqui tu Telefono"
            />
          </div>
        </div>
        <CartDetails cart={cart} cartTotal={cartTotal} />
        <button type="submit" className="btnAdd">
          Comprar
        </button>
      </form>
    </div>
  );
}
