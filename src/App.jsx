import "./styles/App.css";
import Layout from "./components/Layout";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./views/NotFound";
import CartContainer from "./views/CartContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <div>
      <BrowserRouter>
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

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
