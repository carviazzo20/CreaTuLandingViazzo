import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

function CartWidget() {
  return (
    <div className="cart-widget">
      <i className="bi bi-cart-fill" style={{ fontSize: '1.5rem' }}></i>
      <span className="cart-count">3</span> {/* Cantidad de productos */}
    </div>
  );
}

export default CartWidget;
