import MealItem from "./MealItem";
import FoodModal from "./FoodModal";
import { useState, useEffect, useContext } from "react";
import CartContext from "../store/CartContext";
import { API_URL } from "../config";

export default function Meals() {
  const [loadedMeals, setLoadedMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);

  const cartCtx = useContext(CartContext);

  function openMeal(meal) {
    setSelectedMeal(meal);
  }

  function closeMeal() {
    setSelectedMeal(null);
  }

  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch(`${API_URL}/meals`);

      if (!response.ok) {
        //...
      }

      const meals = await response.json();
      setLoadedMeals(meals);
    }
    fetchMeals();
  }, []);

  return (
    <div>
      <ul id="meals">
        {loadedMeals.map((meal) => (
          <MealItem key={meal.id} meal={meal} onSelect={() => openMeal(meal)} />
        ))}
      </ul>
      <FoodModal
        meal={selectedMeal}
        onClose={closeMeal}
        onAdd={cartCtx.addItem}
      />
    </div>
  );
}
