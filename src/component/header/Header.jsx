import "./Header.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header-container">
      <Link to='/'><h2>Fake Store</h2></Link>
      <AiOutlineShoppingCart className="cart-item" />
    </div>
  );
}

export default Header;
