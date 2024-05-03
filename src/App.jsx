import "./App.css";
import Layout from "./components/Layout/Layout";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <Layout>
      <ItemListContainer greeting={"La ropa sera básica, el unico sos vos."} />
    </Layout>
  );
}

export default App;
