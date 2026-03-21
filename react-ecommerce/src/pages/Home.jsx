import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

// Use simple strings for images in the public folder
const allProducts = [
  {
    id: 1,
    name: "Gaming Laptop",
    oldPrice: 70000,
    price: 63000,
    discount: 15,
    rating: 4,
    image: "/images/product1.jpg",
  },
  {
    id: 2,
    name: "Wireless Headphones",
    oldPrice: 1000,
    price: 799,
    discount: 20,
    rating: 5,
    image: "/images/product2.jpg",
  },
  {
    id: 3,
    name: "Gaming Keyboard",
    oldPrice: 1499,
    price: 999,
    discount: 40,
    rating: 4,
    image: "/images/product3.jpg",
  },
  {
    id: 4,
    name: "Wireless Earphones",
    oldPrice: 599,
    price: 349,
    discount: 30,
    rating: 4,
    image: "/images/product4.jpg",
  },
];

const Home = () => {
  const darkBg = "#1e122b";

  return (
    <>
      {/* 1. Top Separator Bar (Visible on ALL devices) */}
      <div
        style={{
          backgroundColor: darkBg,
          height: "10px",
          width: "100%",
          flexShrink: 0,
        }}
      ></div>

      {/* 2. Mobile-Only Header (Logo + Name) */}
      <div
        className="d-lg-none"
        style={{
          backgroundColor: darkBg,
          padding: "0.8rem 1rem",
          textAlign: "center",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
        }}
      >
        <div className="d-flex align-items-center justify-content-center gap-2">
          <img
            src="/images/pclogo.png"
            alt="Fifty-Glaze Logo"
            width="32"
            height="32"
            className="object-fit-contain"
          />
          <span
            style={{
              color: "#ffffff",
              fontSize: "1.1rem",
              fontWeight: "700",
              letterSpacing: "0.5px",
            }}
          >
            Fifty-Glaze
          </span>
        </div>
      </div>

      {/* 3. Main Content Wrapper (Light Gray Background, Full Height) */}
      <div
        style={{
          backgroundColor: "#f5f5f5",
          minHeight: "100vh",
          paddingBottom: "6rem",
        }}
      >
        <div className="container mt-4">
          {/* Carousel Section */}
          <div
            id="carouselExampleAutoplaying"
            className="carousel slide mb-5 shadow rounded-4 overflow-hidden"
            data-bs-ride="carousel"
          >
            {/* Indicators */}
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide-to="0"
                className="active"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide-to="1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide-to="2"
              ></button>
            </div>

            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="3000">
                <img
                  src="/images/banner.jpg"
                  className="d-block w-100"
                  alt="Banner 1"
                  style={{ height: "400px", objectFit: "cover" }}
                />
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <img
                  src="/images/banner2.jpg"
                  className="d-block w-100"
                  alt="Banner 2"
                  style={{ height: "400px", objectFit: "cover" }}
                />
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <img
                  src="/images/banner3.jpg"
                  className="d-block w-100"
                  alt="Banner 3"
                  style={{ height: "400px", objectFit: "cover" }}
                />
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

          {/* Featured Products Section */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="mb-0 fw-bold" style={{ color: darkBg }}>
              Featured Products
            </h2>
            <Link
              to="/products"
              className="btn fw-bold"
              style={{
                fontSize: 17,
                color: "#9957b8",
                border: "2px solid #9957b8",
                borderRadius: "5px",
              }}
            >
              View All Products
            </Link>
          </div>

          <div className="row">
            {allProducts.map((product) => (
              <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
