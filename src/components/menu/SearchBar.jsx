import "./../../styles/menu.css";

export default function SearchBar({ search, setSearch }) {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search your favorite dish..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
