// src/components/NavBar.jsx
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <nav style={styles.nav}>
      <h1 style={styles.logo}>MiTienda</h1>
      <ul style={styles.navLinks}>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem",
    backgroundColor: "#eee",
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "1rem",
  },
};

export default NavBar;
