import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <main>
        <ItemListContainer greeting="¡Bienvenida/o a nuestra tienda!" />
      </main>
      <footer>
        <p>&copy; 2025 MiTienda. Todos los derechos reservados.</p>
      </footer>
    </>
  );
}

export default App;
