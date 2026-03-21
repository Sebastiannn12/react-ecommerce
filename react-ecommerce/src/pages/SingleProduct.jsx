import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

// Mock data to find the product (matches your ProductList data)
const products = [
  {
    id: 1,
    name: "Gaming Laptop",
    category: "Electronics",
    price: 63000,
    oldPrice: 70000,
    discount: 15,
    rating: 4,
    image: "/images/product1.jpg",
    description: "High-performance gaming laptop with RGB keyboard.",
  },
  {
    id: 2,
    name: "Wireless Headphones",
    category: "Accessories",
    price: 799,
    oldPrice: 1000,
    discount: 20,
    rating: 5,
    image: "/images/product2.jpg",
    description: "Noise-canceling wireless headphones with 40h battery.",
  },
  {
    id: 3,
    name: "Gaming Keyboard",
    category: "Accessories",
    price: 999,
    oldPrice: 1499,
    discount: 40,
    rating: 4,
    image: "/images/product3.jpg",
    description: "Mechanical gaming keyboard with custom switches.",
  },
  {
    id: 4,
    name: "Wireless Earphones",
    category: "Accessories",
    price: 349,
    oldPrice: 599,
    discount: 30,
    rating: 4,
    image: "/images/product4.jpg",
    description: "Compact waterproof earphones for daily use.",
  },
  {
    id: 5,
    name: "Wired Gaming Mouse",
    category: "Accessories",
    price: 549,
    oldPrice: 799,
    discount: 33,
    rating: 4,
    image: "/images/product5.jpg",
    description: "Ultra-fast wired mouse with adjustable DPI.",
  },
  {
    id: 6,
    name: "Wireless Gaming Mouse",
    category: "Accessories",
    price: 839,
    oldPrice: 1000,
    discount: 24,
    rating: 5,
    image: "/images/product6.jpg",
    description: "Lag-free wireless gaming mouse with ergonomic grip.",
  },
  {
    id: 7,
    name: "Monitor",
    category: "Electronics",
    price: 2209,
    oldPrice: 3000,
    discount: 40,
    rating: 5,
    image: "/images/product7.jpg",
    description: "4K UHD Monitor with 144Hz refresh rate.",
  },
];

const SingleProduct = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  useEffect(() => {
    if (product) {
      // --- RECENTLY VIEWED SAVING LOGIC ---
      const history = JSON.parse(localStorage.getItem("recentlyViewed")) || [];

      // Remove if duplicate, then add to front
      const filtered = history.filter((item) => item.id !== product.id);
      const newHistory = [product, ...filtered].slice(0, 5); // Keep top 5

      localStorage.setItem("recentlyViewed", JSON.stringify(newHistory));
    }
  }, [product]);

  if (!product)
    return <div className="container py-5 text-center">Product not found.</div>;

  return (
    <div className="container py-5">
      <Link to="/" className="btn btn-outline-secondary mb-4">
        ← Back to Store
      </Link>
      <div className="row">
        <div className="col-md-6 mb-4">
          <img
            src={product.image}
            alt={product.name}
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6">
          <span className="badge bg-primary mb-2">{product.category}</span>
          <h1 className="fw-bold">{product.name}</h1>
          <div className="d-flex align-items-center mb-3 text-warning">
            {[...Array(5)].map((_, i) => (
              <i
                key={i}
                className={`fa${i < product.rating ? "s" : "r"} fa-star`}
              ></i>
            ))}
          </div>
          <p className="lead text-muted">{product.description}</p>
          <h2 className="text-danger fw-bold">
            ₱{product.price.toLocaleString()}
          </h2>
          <p className="text-muted text-decoration-line-through">
            ₱{product.oldPrice.toLocaleString()}
          </p>
          <button className="btn btn-dark btn-lg px-5 mt-3">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
