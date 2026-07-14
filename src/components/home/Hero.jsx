import { Link } from "react-router-dom";

export default function Hero({ onExplore }) {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <span className="hero-tag">Luxury Dining Experience</span>

        <h1>
          Taste The World <br /> One Bite At A Time
        </h1>

        <p>
          Discover authentic cuisines crafted with passion. From Indian spices
          to Italian classics, your next favorite meal is just a click away.
        </p>

        <Link to="/menu" className="hero-btn">
          Explore Menu
        </Link>
      </div>
    </section>
  );
}
