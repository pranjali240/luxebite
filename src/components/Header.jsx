import { useContext } from "react";
import { Link } from "react-router-dom";
import logoImg from "../assets/LuxeBite.png";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";

export default function Header() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  function handleShowCart() {
    userProgressCtx.showCart();
  }

  return (
    <header id="main-header">
      <Link to="/" id="title">
        <img src={logoImg} alt="LuxeBite Logo" />

        <div>
          <h1>LuxeBite</h1>
          <p className="tagline">Luxury Dining Experience</p>
        </div>
      </Link>

      <nav>
        <Button textOnly onClick={handleShowCart}>
          🛒 Cart ({totalCartItems})
        </Button>
      </nav>
    </header>
  );
}
