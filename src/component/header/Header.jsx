import "./Header.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";

function Header() {
  const { cart } = useContext(ShopContext);

  return (
    <div className="header-container">
      <Link to="/">
        <h2>Fake Store</h2>
      </Link>
      <Link to="/cart">
        <AiOutlineShoppingCart className="cart-item" />
        <span>{cart.length}</span>
      </Link>
    </div>
  );
}

export default Header;
