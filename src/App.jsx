import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemFiltered from "./components/ItemListContainer/ItemFiltered";

function App() {
  return (
    <BrowserRouter>
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
            path="/:type"
            element={
              <ItemFiltered
                greeting={"La mejor calidad en prendas."}
              />
            }
          />
          <Route path="*" element={<h2>Error 404. Not Found</h2>} />
          {/* crear un component digno para este 404 */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
