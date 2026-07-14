import "../styles/FoodModal.css";

export default function FoodModal({ meal, onClose, onAdd }) {
  if (!meal) return null;

  return (
    <div className="food-modal-overlay" onClick={onClose}>
      <div className="food-modal" onClick={(e) => e.stopPropagation()}>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />

        <div className="food-modal-content">
          <span className="chef-tag">Chef's Special</span>

          <h2>{meal.name}</h2>

          <p>{meal.description}</p>

          <div className="food-info">
            <div>
              <small>Preparation</small>
              <strong>20 mins</strong>
            </div>

            <div>
              <small>Cuisine</small>
              <strong>{meal.category}</strong>
            </div>

            <div>
              <small>Price</small>
              <strong>${meal.price}</strong>
            </div>
          </div>

          <div className="modal-buttons">
            <button className="outline-btn" onClick={onClose}>
              Close
            </button>

            <button className="gold-btn" onClick={() => onAdd(meal)}>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
