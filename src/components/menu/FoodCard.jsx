import "./../../styles/menu.css";
import { API_URL } from "../../config";

export default function FoodCard({ meal, onAddToCart, onSelect }) {
  return (
    <div className="food-card" onClick={() => onSelect(meal)}>
      {" "}
      <div className="food-image">
        <img src={`${API_URL}/${meal.image}`} alt={meal.name} />

        {meal.featured && <span className="badge featured">⭐ Featured</span>}

        {meal.popular && <span className="badge popular">🔥 Popular</span>}
      </div>
      <div className="food-content">
        <div className="food-top">
          <h3>{meal.name}</h3>

          <span className="rating">⭐ {meal.rating}</span>
        </div>

        <p className="description">{meal.description}</p>

        <div className="food-meta">
          <span>⏱ {meal.deliveryTime}</span>

          <span>{meal.veg ? "🥗 Veg" : "🍗 Non-Veg"}</span>
        </div>

        <div className="food-bottom">
          <h2>${meal.price}</h2>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(meal);
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
