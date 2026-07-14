import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/CartContext";
import FoodCard from "./FoodCard";
import FoodModal from "../FoodModal";
import { API_URL } from "../../config";

export default function FoodGrid({ search, category }) {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [error, setError] = useState("");

  const cartCtx = useContext(CartContext);

  function openMeal(meal) {
    setSelectedMeal(meal);
  }

  function closeMeal() {
    setSelectedMeal(null);
  }

  useEffect(() => {
    async function fetchMeals() {
      try {
        const response = await fetch(`${API_URL}/meals`);

        if (!response.ok) {
          throw new Error("Unable to load menu.");
        }

        const data = await response.json();
        setMeals(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchMeals();
  }, []);

  function handleAddToCart(meal) {
    cartCtx.addItem(meal);
  }

  const filteredMeals = meals.filter((meal) => {
    const matchesSearch = meal.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory = category === "All" || meal.category === category;

    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return (
      <h2
        style={{
          textAlign: "center",
          color: "white",
          marginTop: "100px",
        }}
      >
        Loading Menu...
      </h2>
    );
  }

  if (error) {
    return (
      <div className="menu-message">
        <h2>Oops!</h2>
        <p>{error}</p>
      </div>
    );
  }

  if (filteredMeals.length === 0) {
    return (
      <div className="menu-message">
        <h2>No Dishes Found</h2>
        <p>Try another cuisine or search keyword.</p>
      </div>
    );
  }

  return (
    <>
      <div className="food-grid">
        {filteredMeals.map((meal) => (
          <FoodCard
            key={meal.id}
            meal={meal}
            onAddToCart={handleAddToCart}
            onSelect={openMeal}
          />
        ))}
      </div>

      <FoodModal
        meal={selectedMeal}
        onClose={closeMeal}
        onAdd={handleAddToCart}
      />
    </>
  );
}
