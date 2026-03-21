import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom"; // Added Link import

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const buttonStyle = {
    background: "linear-gradient(90deg, #52309b 0%, #52309b 100%)",
    border: "none",
    color: "white",
    fontWeight: "600",
    transition: "0.3s ease",
  };

  return (
    <div
      className="card h-100 shadow-sm"
      style={{ border: "1px solid #e0e0e0", borderRadius: "8px" }}
    >
      {/* Image wrapper for zoom and badge */}
      <div
        className="product-img-wrapper"
        style={{ position: "relative", overflow: "hidden" }}
      >
        {/* Sale badge */}
        {product.discount && (
          <div
            className="sale-badge"
            style={{
              position: "absolute",
              top: "10px",
              left: "10px",
              backgroundColor: "#ff4d4d",
              color: "white",
              padding: "2px 8px",
              borderRadius: "4px",
              fontSize: "0.8rem",
              zIndex: 1,
            }}
          >
            -{product.discount}%
          </div>
        )}
        {/* Added Link around the image */}
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            className="card-img-top product-img"
            alt={product.name}
            style={{ height: "200px", objectFit: "contain", padding: "15px" }}
          />
        </Link>
      </div>

      <div className="card-body d-flex flex-column text-center">
        {/* Added Link around the title */}
        <Link to={`/product/${product.id}`} className="text-decoration-none">
          <h6
            className="card-title text-dark mb-2"
            style={{
              fontSize: "0.95rem",
              height: "2.5rem",
              overflow: "hidden",
            }}
          >
            {product.name}
          </h6>
        </Link>

        {/* Star rating */}
        <div className="mb-2 text-warning" style={{ fontSize: "0.85rem" }}>
          {[...Array(5)].map((_, index) => (
            <i
              key={index}
              className={`${index < product.rating ? "fas" : "far"} fa-star`}
            ></i>
          ))}
        </div>

        {/* Price section */}
        <div className="mb-3">
          <span
            className="text-muted text-decoration-line-through me-2"
            style={{ fontSize: "0.9rem" }}
          >
            ₱{product.oldPrice?.toLocaleString()}
          </span>
          <span className="fw-bold text-danger" style={{ fontSize: "1.1rem" }}>
            ₱{product.price?.toLocaleString()}
          </span>
        </div>

        <button
          className="btn mt-auto py-2 shadow-sm"
          style={buttonStyle}
          onClick={() => addToCart(product)}
          onMouseOver={(e) =>
            (e.currentTarget.style.filter = "brightness(1.2)")
          }
          onMouseOut={(e) => (e.currentTarget.style.filter = "brightness(1)")}
        >
          <i className="fas fa-shopping-cart me-2"></i>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
