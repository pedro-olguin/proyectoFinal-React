import "./styles/App.css";
import Layout from "./components/Layout";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import CartContainer from "./components/CartContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartProvider from "./contexts/CartProvider";
import CheckoutContainer from "./components/CheckoutContainer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <CartProvider>
          <Layout>
            <Routes>
              <Route
                path={"/"}
                element={<ItemListContainer contenido={"Comprá Online!"} />}
              />
              <Route
                path="/Categoria/:categoryName"
                element={<ItemListContainer contenido={"Comprá Online!"} />}
              />

              <Route
                path="/Producto/:productoId"
                element={<ItemDetailContainer />}
              />
              <Route path="/Cart" element={<CartContainer />} />
              <Route path="/Checkout" element={<CheckoutContainer />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
