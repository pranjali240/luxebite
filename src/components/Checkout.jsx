import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";
import UserProgressContext from "../store/UserProgressContext";
import Input from "./UI/Input";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./UI/Button";
import { API_URL } from "../config";

export default function Checkout() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  const navigate = useNavigate();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0,
  );

  function handleClose() {
    userProgressCtx.hideCheckout();
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const fd = new FormData(event.target);
    const customerData = Object.fromEntries(fd.entries());

    setIsSubmitting(true);

    try {
      const response = await fetch(`${API_URL}/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          order: {
            items: cartCtx.items,
            customer: customerData,
          },
        }),
      });

      if (!response.ok) {
        throw new Error("Order failed");
      }

      cartCtx.clearCart();
      userProgressCtx.hideCheckout();
      navigate("/success");
    } catch (error) {
      console.log(error);
      alert("Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Modal
      className="checkout-modal"
      open={userProgressCtx.progress === "checkout"}
    >
      <form className="checkout-form" onSubmit={handleSubmit}>
        <h2>Complete Your Order</h2>

        <p className="checkout-subtitle">Please enter your delivery details.</p>

        <div className="checkout-total">
          <span>Total Amount</span>
          <h3>{currencyFormatter.format(cartTotal)}</h3>
        </div>

        <div className="checkout-grid">
          <Input label="Full Name" type="text" id="name" />
          <Input label="Email Address" type="email" id="email" />
        </div>

        <Input label="Street Address" type="text" id="street" />

        <div className="checkout-grid">
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>

        <div className="checkout-actions">
          <Button textOnly type="button" onClick={handleClose}>
            Cancel
          </Button>

          <Button disabled={isSubmitting}>
            {isSubmitting ? "Placing Order..." : "Confirm Order"}
          </Button>
        </div>
      </form>
    </Modal>
  );
}
