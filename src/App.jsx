import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <main>
      <NavBar />
      <ItemListContainer greeting={"La ropa sera básica, el unico sos vos."} />
      <Footer />
    </main>
  );
}

export default App;
