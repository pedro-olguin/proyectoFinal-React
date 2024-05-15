import { useState } from "react";
import CartContext from "./CartContext";

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (producto, cantidad) => {
    const productoEnCarrito = cart.find(
      (productos) => productos.producto.id === producto.id
    );

    if (productoEnCarrito) {
      const cargarEnCarrito = cart.map((productos) => {
        if (productos.producto.id === producto.id) {
          return { producto, cantidad: productos.cantidad + cantidad };
        }
        return productos;
      });
      setCart(cargarEnCarrito);
    } else {
      setCart(...cart, { producto, cantidad });
    }
  };

  const removeFromCart = (productoId, cantidad) => {
    const itemInCart = cart.find(
      (productos) => productos.producto.id === productoId
    );
    if (itemInCart) {
      const updatedCart = cart.map((productos) => {
        if (productos.producto.id === productoId) {
          return {
            producto: productos.producto,
            cantidad: productos.cantidad - cantidad,
          };
        }
        return productos;
      });

      const filteredCart = updatedCart.filter(
        (productos) => productos.cantidad > 0
      );

      setCart(filteredCart);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartTotal = cart
    .reduce((acc, productos) => {
      return acc + productos.producto.precio * productos.cantidad;
    }, 0)
    .toFixed(2);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, cartTotal }}
    >
      {children}
    </CartContext.Provider>
  );
}
