import React, { useState, useEffect } from "react";

const Sidebar = ({ onCategorySelect, activeCategory }) => {
  const [categories, setCategories] = useState(["All"]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("https://react-ecommerce-backend-x3rr.onrender.com/api/categories")
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="list-group list-group-flush">
      {categories.map((cat) => (
        <button
          key={cat}
          className={`list-group-item list-group-item-action border-0 rounded mb-1 ${
            activeCategory === cat ? "active text-white" : "text-dark"
          }`}
          onClick={() => onCategorySelect(cat)}
          style={{
            fontSize: "0.9rem",
            transition: "0.2s",
           
            backgroundColor: activeCategory === cat ? "#542abf" : "transparent",
            borderColor: activeCategory === cat ? "#000000" : "transparent",
          }}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
