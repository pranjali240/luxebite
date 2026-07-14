import "./../../styles/menu.css";

const categories = [
  "All",
  "Italian",
  "American",
  "Indian",
  "Japanese",
  "French",
  "Mexican",
  "Healthy",
  "Dessert",
  "Breakfast",
  "Spanish",
  "Middle Eastern",
];

export default function CategoryFilter({
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <div className="category-filter">
      {categories.map((category) => (
        <button
          key={category}
          className={
            selectedCategory === category
              ? "category-btn active"
              : "category-btn"
          }
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
