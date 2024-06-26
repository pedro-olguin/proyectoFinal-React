import { useEffect, useState } from "react";
import CartContext from "./CartContext";
import Swal from "sweetalert2";

export default function CartProvider({ children }) {
  const [cart, setCart] = useState(
    localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
  );

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
      setCart([...cart, { producto, cantidad }]);
    }
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

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

  const cartTotal = cart.reduce((acc, productos) => {
    return acc + productos.producto.precio * productos.cantidad;
  }, 0);

  const checkAddToCart = (producto, cantidad) => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      icon: "success",
      title: `Has agregado ${cantidad}- ${producto.titulo}`,
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        cartTotal,
        checkAddToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
