import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SearchBar from "../components/menu/SearchBar";
import CategoryFilter from "../components/menu/CategoryFilter";
import FoodGrid from "../components/menu/FoodGrid";

export default function Menu() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const location = useLocation();

  useEffect(() => {
    if (location.state?.category) {
      setCategory(location.state.category);
    }
  }, [location.state]);

  return (
    <main className="menu-page">
      <section className="menu-hero">
        <h1>Explore Our Menu</h1>
        <p>Discover delicious dishes crafted with passion.</p>
      </section>

      <SearchBar search={search} setSearch={setSearch} />

      <CategoryFilter
        selectedCategory={category}
        setSelectedCategory={setCategory}
      />

      <FoodGrid search={search} category={category} />
    </main>
  );
}
