import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CartProvider from "./CartContext/CartProvider";
import CartContainer from "./components/CartContainer/CartContainer";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Layout>
          <Routes>
            <Route
              path="/"
              element={
                <ItemListContainer
                  greeting={"La ropa sera básica, el unico sos vos."}
                />
              }
            />
            <Route
              path="/products/:type"
              element={
                <ItemListContainer greeting={"La mejor calidad en prendas."} />
              }
            />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/checkout" element={<h1>En construcción</h1>} />
          </Routes>
        </Layout>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
