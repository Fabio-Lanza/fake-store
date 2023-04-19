import "./Header.css";
import { AiOutlineShoppingCart } from "react-icons/ai";

function Header() {
  return (
    <div className="header-container">
      <h2>Fake Store</h2>
      <AiOutlineShoppingCart className="cart-item" />
    </div>
  );
}

export default Header;
