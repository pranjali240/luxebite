import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../config";

export default function FeaturedDishes() {
  const [dishes, setDishes] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchFeaturedDishes() {
      try {
        const response = await fetch(`${API_URL}/meals`);

        if (!response.ok) {
          throw new Error("Failed to load featured dishes.");
        }

        const meals = await response.json();

        const featuredMeals = meals.filter((meal) => meal.featured).slice(0, 4);

        setDishes(featuredMeals);
      } catch (error) {
        console.log(error);
      }
    }

    fetchFeaturedDishes();
  }, []);

  return (
    <section className="featured">
      <div className="section-title">
        <p>Chef's Choice</p>
        <h2>Featured Dishes</h2>
      </div>

      <div className="featured-grid">
        {dishes.map((dish) => (
          <div key={dish.id} className="featured-card">
            <img src={`http://localhost:3000/${dish.image}`} alt={dish.name} />

            <div className="featured-content">
              <h3>{dish.name}</h3>

              <p>${dish.price}</p>

              <button
                onClick={() =>
                  navigate("/menu", {
                    state: {
                      mealId: dish.id,
                    },
                  })
                }
              >
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
