import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemList from "./components/ItemList/ItemList";

function App() {
  let saludo = "Hola";
  let hola = "Bienvenidos a Tienda Koala";

  return (
    <div className="App">
      <NavBar />
      <ItemList saludo={saludo} hola={hola} />
    </div>
  );
}

export default App;
