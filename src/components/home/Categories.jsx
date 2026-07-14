import { useEffect, useState } from "react";
import { API_URL } from "../../config";

export default function Categories({ onSelectCuisine }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      const response = await fetch(`${API_URL}/meals`);
      const meals = await response.json();

      const uniqueCategories = [...new Set(meals.map((meal) => meal.category))];

      const categoryData = uniqueCategories
        .map((category, index) => ({
          id: index + 1,
          name: category,
          image: meals.find((meal) => meal.category === category).image,
        }))
        .slice(0, 4);

      setCategories(categoryData);
    }

    fetchCategories();
  }, []);

  return (
    <section className="categories">
      <div className="section-title">
        <p>Discover</p>
        <h2>Popular Cuisines</h2>
      </div>

      <div className="categories-grid">
        {categories.map((item) => (
          <div
            key={item.id}
            className="category-card"
            onClick={() => onSelectCuisine(item.name)}
          >
            <img src={`http://localhost:3000/${item.image}`} alt={item.name} />

            <div className="category-overlay">
              <h3>{item.name}</h3>

              <p>
                Explore authentic {item.name} cuisine prepared by world-class
                chefs.
              </p>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectCuisine(item.name);
                }}
              >
                Explore Menu
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
