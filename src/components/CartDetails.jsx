import CartItem from "./CartItem";
import "../styles/CartDetails.css";

export default function CartDetails({ cart, cartTotal }) {
  return (
    <>
      <div className="cart">
        {cart.length === 0 ? (
          <h1>No hay productos en el carrito</h1>
        ) : (
          cart.map((productos) => {
            return (
              <CartItem key={productos.producto.id} productos={productos} />
            );
          })
        )}
      </div>
      <div>
        <h3>Total: ${cartTotal}</h3>
      </div>
    </>
  );
}
