import CartItem from "./CartItem";

export default function CartDetails({ cart, cartTotal }) {
  return (
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
      </div>
      <h3>Total: ${cartTotal}</h3>
    </div>
  );
}
