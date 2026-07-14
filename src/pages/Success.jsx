import { Link } from "react-router-dom";
import "../styles/Success.css";

export default function Success() {
  return (
    <section className="success-page">
      <div className="particles"></div>

      <div className="success-card">
        <div className="checkmark">✓</div>

        <span className="success-tag">ORDER SUCCESSFULLY PLACED</span>

        <h1>
          Thank You For Choosing
          <br />
          LuxeBite
        </h1>

        <p>
          Your order has been received and our chefs have already started
          preparing your meal.
        </p>

        <div className="order-id">
          Order ID
          <strong>#LXB202601</strong>
        </div>

        <div className="timeline">
          <div className="step active">
            <div className="circle"></div>
            <span>Confirmed</span>
          </div>

          <div className="line"></div>

          <div className="step">
            <div className="circle"></div>
            <span>Preparing</span>
          </div>

          <div className="line"></div>

          <div className="step">
            <div className="circle"></div>
            <span>Ready</span>
          </div>

          <div className="line"></div>

          <div className="step">
            <div className="circle"></div>
            <span>Delivered</span>
          </div>
        </div>

        <div className="success-buttons">
          <Link to="/menu" className="primary-btn">
            Continue Dining
          </Link>

          <Link to="/" className="secondary-btn">
            Home
          </Link>
        </div>
      </div>
    </section>
  );
}
