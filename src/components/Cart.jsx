import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";
import UserProgressContext from "../store/UserProgressContext";
import Button from "./UI/Button";
import CartItem from "./CartItem";

export default function Cart() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0,
  );

  function handleCartClose() {
    userProgressCtx.hideCart();
  }

  function handleGoToCheckout() {
    userProgressCtx.showCheckout();
  }

  return (
    <Modal
      className="cart"
      open={userProgressCtx.progress === "cart"}
      onClose={userProgressCtx.progress === "cart" ? handleCartClose : null}
    >
      <div className="cart-header">
        <h2>Your Cart</h2>
        <span>{cartCtx.items.length} Items</span>
      </div>

      {cartCtx.items.length === 0 ? (
        <div className="empty-cart">
          <h3>Your cart is empty</h3>
          <p>Add delicious dishes to continue.</p>
          <Button onClick={handleCartClose}>Browse Menu</Button>
        </div>
      ) : (
        <>
          <ul className="cart-list">
            {cartCtx.items.map((item) => (
              <CartItem
                key={item.id}
                name={item.name}
                quantity={item.quantity}
                price={item.price}
                onIncrease={() => cartCtx.addItem(item)}
                onDecrease={() => cartCtx.removeItem(item.id)}
              />
            ))}
          </ul>

          <div className="cart-footer">
            <div className="cart-total-box">
              <span>Total</span>
              <h3>{currencyFormatter.format(cartTotal)}</h3>
            </div>

            <div className="modal-actions">
              <Button textOnly onClick={handleCartClose}>
                Continue Shopping
              </Button>

              <Button onClick={handleGoToCheckout}>Checkout</Button>
            </div>
          </div>
        </>
      )}
    </Modal>
  );
}
