import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

const Checkout = () => {
  const darkBg = "#1e122b";   
  const { cart, clearCart } = useContext(CartContext);

  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    payment: "cod",
  });

  const [submitted, setSubmitted] = useState(false);
  const [finalTotal, setFinalTotal] = useState(0);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const tax = subtotal * 0.12;
  const total = subtotal + tax;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.address || !form.phone) {
      alert("Please complete all fields");
      return;
    }
    setFinalTotal(total);
    clearCart();
    setSubmitted(true);
  };

  // --- SUCCESS VIEW ---
  if (submitted) {
    return (
      <>
        {/* Top Bar */}
        <div
          style={{ backgroundColor: darkBg, height: "10px", width: "100%" }}
        ></div>

        {/* Mobile Header */}
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
              style={{
                color: "#ffffff",
                fontSize: "1.1rem",
                fontWeight: "700",
              }}
            >
              Fifty-Glaze
            </span>
          </div>
        </div>

        {/* Content Wrapper */}
        <div
          style={{
            backgroundColor: "#f5f5f5",
            minHeight: "100vh",
            paddingBottom: "6rem",
          }}
        >
          <div className="container mt-5 py-5 text-center">
            <div className="card border-0 shadow-lg p-5 bg-dark text-white rounded-4">
              <div className="display-1 text-success mb-3">
                <i className="fas fa-check-circle"></i>
              </div>
              <h1 className="fw-bold">Order Confirmed!</h1>
              <p className="lead mt-3">
                Thank you, <b>{form.name}</b>. Your order is being processed.
              </p>
              <hr className="border-secondary my-4" />
              <h3 className="text-white">
                Total Paid: ₱
                {finalTotal.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                })}
              </h3>
              <button
                className="btn mt-4 px-5 rounded-pill fw-bold shadow-sm"
                style={{
                  backgroundColor: "#7c4097",
                  color: "#ffffff",
                  border: "none",
                }}
                onClick={() => (window.location.href = "/")}
              >
                Back to Shop
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

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
        <div className="container mt-5 pb-5">
          <h2 className="fw-bold mb-4" style={{ color: darkBg }}>
            Secure Checkout
          </h2>

          <div className="row g-4">
            {/* Customer Form */}
            <div className="col-lg-7">
              <div className="card border-0 shadow bg-dark text-white p-4 rounded-4">
                <h4 className="mb-4 text-white fw-bold">
                  <i className="fas fa-user-edit me-2"></i>Customer Information
                </h4>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label small text-uppercase fw-bold text-white">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        className="form-control bg-white text-dark border-0 py-2 shadow-sm"
                        placeholder="John Doe"
                        onChange={handleChange}
                        style={{
                          backgroundColor: "white !important",
                          color: "#212529 !important",
                        }}
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label small text-uppercase fw-bold text-white">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="form-control bg-white text-dark border-0 py-2 shadow-sm"
                        placeholder="name@example.com"
                        onChange={handleChange}
                        style={{
                          backgroundColor: "white !important",
                          color: "#212529 !important",
                        }}
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label small text-uppercase fw-bold text-white">
                      Delivery Address
                    </label>
                    <textarea
                      name="address"
                      className="form-control bg-white text-dark border-0 shadow-sm"
                      rows="3"
                      placeholder="Street, City, Zip Code"
                      onChange={handleChange}
                      style={{
                        backgroundColor: "white !important",
                        color: "#212529 !important",
                      }}
                      required
                    ></textarea>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label small text-uppercase fw-bold text-white">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        name="phone"
                        className="form-control bg-white text-dark border-0 py-2 shadow-sm"
                        placeholder="09XXXXXXXXX"
                        onChange={handleChange}
                        style={{
                          backgroundColor: "white !important",
                          color: "#212529 !important",
                        }}
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-4">
                      <label className="form-label small text-uppercase fw-bold text-white">
                        Payment Method
                      </label>
                      <select
                        name="payment"
                        className="form-select bg-white text-dark border-0 py-2 shadow-sm"
                        onChange={handleChange}
                        style={{
                          backgroundColor: "white !important",
                          color: "#212529 !important",
                        }}
                      >
                        <option value="cod">Cash on Delivery</option>
                        <option value="gcash">GCash</option>
                        <option value="card">Credit Card</option>
                      </select>
                    </div>
                  </div>

                  <button className="btn btn-success w-100 py-3 fw-bold rounded-pill shadow-sm">
                    PLACE ORDER NOW
                  </button>
                </form>
              </div>
            </div>

            {/* Order Summary */}
            <div className="col-lg-5">
              <div
                className="card border-0 shadow bg-dark text-white p-4 rounded-4 sticky-top"
                style={{
                  top: "80px",
                }} /* Adjusted top for the new header height */
              >
                <h4 className="mb-4 text-white fw-bold">
                  <i className="fas fa-shopping-bag me-2"></i>Order Summary
                </h4>

                <div className="cart-items mb-3">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="d-flex align-items-center mb-3 pb-3 border-bottom border-secondary"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="rounded me-3 shadow-sm"
                        style={{
                          width: "60px",
                          height: "60px",
                          objectFit: "cover",
                        }}
                      />
                      <div className="flex-grow-1">
                        <h6 className="mb-0 small fw-bold text-white">
                          {item.name}
                        </h6>
                        <small className="text-white-50">Qty: {item.qty}</small>
                      </div>
                      <span className="fw-bold text-white">
                        ₱{(item.price * item.qty).toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="summary-details">
                  <div className="d-flex justify-content-between mb-2">
                    <span className="text-white fw-bold">Subtotal</span>
                    <span className="text-white">
                      ₱
                      {subtotal.toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                      })}
                    </span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span className="text-white fw-bold">VAT (12%)</span>
                    <span className="text-white">
                      ₱
                      {tax.toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                      })}
                    </span>
                  </div>
                  <hr className="border-secondary" />
                  <div className="d-flex justify-content-between mb-0">
                    <h4 className="fw-bold text-white">Total</h4>
                    <h4 className="fw-bold text-white">
                      ₱
                      {total.toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                      })}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
