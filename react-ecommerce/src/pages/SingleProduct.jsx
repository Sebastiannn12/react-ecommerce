import React, { useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

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
  {
    id: 8,
    name: "Gaming Laptop RUG",
    category: "Electronics",
    price: 72989,
    oldPrice: 86700,
    discount: 30,
    rating: 5,
    image: "/images/product8.jpg",
    description:
      "Ultimate gaming performance with the new RUG series processor.",
  },
  {
    id: 9,
    name: "Royal Cladge Keyboard",
    category: "Accessories",
    price: 1240,
    oldPrice: 1754,
    discount: 27,
    rating: 5,
    image: "/images/product9.jpg",
    description: "Premium mechanical feel with royal aesthetic design.",
  },
  {
    id: 10,
    name: "ROG Earbuds",
    category: "Accessories",
    price: 4450,
    oldPrice: 77590,
    discount: 37,
    rating: 4,
    image: "/images/product10.jpg",
    description: "Immersive sound quality designed for competitive gaming.",
  },
];

const SingleProduct = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const product = products.find((p) => p.id === parseInt(id));

  useEffect(() => {
    if (product) {
      const history = JSON.parse(localStorage.getItem("recently_viewed")) || [];
      const filtered = history.filter((item) => item.id !== product.id);
      const newHistory = [product, ...filtered].slice(0, 5);
      localStorage.setItem("recently_viewed", JSON.stringify(newHistory));
    }
  }, [product]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      alert(`${product.name} added to cart!`);
    }
  };

  if (!product)
    return (
      <div className="container py-5 text-center">
        <div
          style={{
            minHeight: "100vh",
            backgroundColor: "#f5f5f5",
            paddingTop: "60px",
          }}
        >
          Product not found.
        </div>
      </div>
    );

  const darkBg = "#1e122b";
  const brandViolet = "#693482";

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

      {/* 3. Main Content Wrapper */}
      <div
        style={{
          backgroundColor: "#f5f5f5",
          minHeight: "100vh",
          paddingBottom: "6rem",
        }}
      >
        <div className="container py-5">
          <Link to="/products" className="btn btn-outline-secondary mb-4">
            ← Back to Products
          </Link>

          <div className="card border-0 shadow-lg rounded-4 overflow-hidden bg-white">
            <div className="row g-0">
              <div className="col-md-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="img-fluid w-100 h-100 object-fit-cover"
                  style={{ minHeight: "400px" }}
                />
              </div>
              <div className="col-md-6 p-4 p-md-5 d-flex flex-column justify-content-center">
                {/* ✅ CHANGED: Custom Violet Badge instead of Blue */}
                <span
                  className="badge mb-3 px-3 py-2"
                  style={{
                    backgroundColor: brandViolet,
                    color: "#ffffff",
                    fontSize: "0.9rem",
                    alignSelf: "flex-start",
                  }}
                >
                  {product.category}
                </span>

                <h1 className="fw-bold mb-3">{product.name}</h1>

                <div className="d-flex align-items-center mb-3 text-warning">
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className={`fa${i < product.rating ? "s" : "r"} fa-star`}
                    ></i>
                  ))}
                  <span className="text-muted ms-2 small">
                    ({product.rating}.0)
                  </span>
                </div>

                <p className="lead text-muted mb-4">{product.description}</p>

                <div className="mb-4">
                  <h2 className="text-danger fw-bold mb-1">
                    ₱{product.price.toLocaleString()}
                  </h2>
                  <p className="text-muted text-decoration-line-through small">
                    ₱{product.oldPrice.toLocaleString()}
                  </p>
                </div>

                <div className="d-grid gap-2">
                  <button
                    onClick={handleAddToCart}
                    className="btn btn-dark btn-lg px-5"
                  >
                    Add to Cart 🛒
                  </button>
                  <Link
                    to="/checkout"
                    className="btn btn-outline-success btn-lg"
                  >
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
