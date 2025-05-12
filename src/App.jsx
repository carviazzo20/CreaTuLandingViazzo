import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <ItemListContainer greeting="¡Bienvenida/o a nuestra tienda!" />
      </main>
    </>
  );
}

export default App;
