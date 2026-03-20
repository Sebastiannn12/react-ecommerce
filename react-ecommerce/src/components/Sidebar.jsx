import React, { useState, useEffect } from 'react'; // 1. Added imports for State and Effect

const Sidebar = () => {
  // Task 5.1: Store the fetched categories in state
  const [categories, setCategories] = useState([]);

  // Task 4.3: Fetch categories from the backend API
  useEffect(() => {
    fetch("http://localhost:5000/api/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data); 
      })
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  return (
    <aside className="bg-light p-3 border rounded">
      <h5>Categories</h5>
      <ul className="list-group">
        {categories.map((category, index) => (
          <li key={index} className="list-group-item list-group-item-action">
            {category}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;