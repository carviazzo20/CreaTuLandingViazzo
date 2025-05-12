import React from 'react';
import CartWidget from './CartWidget';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>MiTienda</h1>
      </div>
      <div className="navbar-links">
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Productos</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </div>
      <div className="navbar-cart">
        <CartWidget />
      </div>
    </nav>
  );
}

export default NavBar;
