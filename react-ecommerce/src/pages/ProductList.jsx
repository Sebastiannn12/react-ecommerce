import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import Sidebar from "../components/Sidebar";
import SkeletonCard from "../components/SkeletonCard";

const ProductList = () => {
  const [dbProducts, setDbProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState(70000);
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState("name");
  const [loading, setLoading] = useState(true);
  const [recentProducts, setRecentProducts] = useState([]);

  const darkBg = "#1e122b"; // Unified color

  useEffect(() => {
    const fetchData = async () => {
      try {
        // ✅ FIXED: Removed extra spaces in URL
        const response = await fetch(
          "https://react-ecommerce-backend-x3rr.onrender.com/api/products"
        );
        const data = await response.json();
        setDbProducts(data);
        setTimeout(() => setLoading(false), 1000);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };
    fetchData();

    const saved = JSON.parse(localStorage.getItem("recently_viewed")) || [];
    setRecentProducts(saved);
  }, []);

  const addToRecent = (product) => {
    const existingEntries =
      JSON.parse(localStorage.getItem("recently_viewed")) || [];
    if (!existingEntries.find((item) => item.id === product.id)) {
      const updatedEntries = [
        { id: product.id, name: product.name, image: product.image },
        ...existingEntries,
      ].slice(0, 3);
      localStorage.setItem("recently_viewed", JSON.stringify(updatedEntries));
      setRecentProducts(updatedEntries);
    }
  };

  const processedProducts = dbProducts
    .filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;
      const matchesPrice = product.price <= maxPrice;
      const matchesRating = product.rating >= minRating;
      return matchesSearch && matchesCategory && matchesPrice && matchesRating;
    })
    .sort((a, b) => {
      if (sortBy === "priceLow") return a.price - b.price;
      if (sortBy === "priceHigh") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return a.name.localeCompare(b.name);
    });

  return (
    <>
      {/* 1. Top Separator Bar */}
      <div
        style={{ backgroundColor: darkBg, height: "10px", width: "100%" }}
      ></div>

      {/* 2. Mobile Header */}
      <div
        className="d-lg-none"
        style={{
          backgroundColor: darkBg,
          padding: "0.8rem 1rem",
          textAlign: "center",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <div className="d-flex align-items-center justify-content-center gap-2">
          <img
            src="/images/pclogo.png"
            alt="Logo"
            width="32"
            height="32"
            className="object-fit-contain"
          />
          <span
            style={{ color: "#ffffff", fontSize: "1.1rem", fontWeight: "700" }}
          >
            Fifty-Glaze
          </span>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#ffffff",
          minHeight: "3.5vh",
          paddingBottom: "1rem",
        }}
      ></div>

      <div className="container pb-5">
        <div className="row mb-5 g-3">
          <div className="col-md-8 px-3">
            <div className="input-group shadow-sm border rounded overflow-hidden">
              <span className="input-group-text border-0 bg-white text-muted">
                <i className="fa fa-search"></i>
              </span>
              <input
                type="text"
                className="form-control border-0 shadow-none"
                placeholder="Search gaming gear..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-4 px-3">
            <select
              className="form-select shadow-sm border"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="name">Sort by: Name (A-Z)</option>
              <option value="priceLow">Sort by: Price (Low to High)</option>
              <option value="priceHigh">Sort by: Price (High to Low)</option>
              <option value="rating">Sort by: Highest Rating</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-4 mb-4 px-3">
            <div
              className="card shadow-sm border-0 mb-4 overflow-hidden"
              style={{ borderRadius: "12px" }}
            >
              <div className="card-body p-0">
                <div className="p-3 bg-white">
                  <h6 className="fw-bold text-uppercase small mb-3">
                    Shop by Category
                  </h6>
                  <Sidebar
                    onCategorySelect={setSelectedCategory}
                    activeCategory={selectedCategory}
                  />
                </div>
                <div
                  className="p-3"
                  style={{ backgroundColor: "#291934", color: "#ffffff" }}
                >
                  <h6 className="fw-bold text-uppercase small mb-3">
                    Refine Results
                  </h6>
                  <div className="mb-4">
                    <div className="d-flex justify-content-between mb-1">
                      <small className="fw-bold">Max Budget</small>
                      <small className="fw-bold">
                        ₱{maxPrice.toLocaleString()}
                      </small>
                    </div>
                    <input
                      type="range"
                      className="form-range"
                      min="0"
                      max="70000"
                      step="500"
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(Number(e.target.value))}
                    />
                  </div>
                  <div className="mb-2">
                    <small className="fw-bold d-block mb-1">
                      Minimum Rating
                    </small>
                    <select
                      className="form-select form-select-sm border-0 text-white"
                      style={{ backgroundColor: "#3d2a52" }}
                      value={minRating}
                      onChange={(e) => setMinRating(Number(e.target.value))}
                    >
                      <option value="0">All Ratings</option>
                      <option value="4">4 Stars & Up</option>
                      <option value="5">5 Stars</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {recentProducts.length > 0 && (
              <div
                className="card shadow-sm border-0 p-3"
                style={{
                  borderRadius: "12px",
                  backgroundColor: "#291934",
                  color: "#ffffff",
                }}
              >
                <h6 className="fw-bold mb-3 text-uppercase small">
                  Recently Viewed
                </h6>
                <div className="d-flex flex-column gap-3">
                  {recentProducts.map((rp) => (
                    <div key={rp.id} className="d-flex align-items-center">
                      <div
                        className="bg-white rounded p-1 me-2"
                        style={{ width: "40px", height: "40px" }}
                      >
                        <img
                          src={rp.image}
                          alt=""
                          width="32"
                          height="32"
                          className="object-fit-contain"
                        />
                      </div>
                      <span className="text-truncate small text-white">
                        {rp.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="col-lg-9 col-md-8 px-3">
            <div className="row">
              {loading
                ? [...Array(6)].map((_, i) => (
                    <div className="col-lg-4 col-md-6 mb-4" key={i}>
                      <SkeletonCard />
                    </div>
                  ))
                : processedProducts.map((p) => (
                    <div
                      className="col-lg-4 col-md-6 mb-4"
                      key={p.id}
                      onClick={() => addToRecent(p)}
                    >
                      <ProductCard product={p} />
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
