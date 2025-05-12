// src/components/CartWidget.jsx
import 'bootstrap-icons/font/bootstrap-icons.css';

function CartWidget() {
  return (
    <div>
      <i className="bi bi-cart-fill" style={{ fontSize: "1.5rem" }}></i>
      <span>3</span> {/* Simula cantidad de productos */}
    </div>
  );
}

export default CartWidget;