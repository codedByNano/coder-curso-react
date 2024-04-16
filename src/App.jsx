import "./App.css";
import Brand from "./components/Brand";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <main>
      <div className="header">
        <Brand />
        <NavBar />
      </div>
      <ItemListContainer greeting={"La ropa sera básica, el unico sos vos."} />
    </main>
  );
}

export default App;
