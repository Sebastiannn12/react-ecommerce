import React from "react";

const Contact = () => {
  const darkBg = "#1e122b";

  return (
    <>
      {/* 1. Top Separator Bar (10px, Visible on ALL devices) */}
      <div
        style={{
          backgroundColor: darkBg,
          height: "10px",
          width: "100%",
          flexShrink: 0,
        }}
      ></div>

      {/* 2. Mobile-Only Header */}
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

      {/* Content Wrapper */}
      <div
        style={{
          backgroundColor: "#f5f5f5",
          paddingBottom: "6rem",
          flexGrow: 1,
        }}
      >
        <div className="container mt-5 pb-5">
          <div className="row justify-content-center">
            {/* Left Side: Contact Info (Light) */}
            <div className="col-lg-5 mb-5 mb-lg-0">
              <h1 className="fw-bold mb-4" style={{ color: "#510e6f" }}>
                Get in Touch
              </h1>
              <p className="lead text-dark mb-4">
                Have questions about our products or orders? We're here to help!
              </p>
              <div className="d-flex align-items-start mb-4">
                <i
                  className="fas fa-map-marker-alt fa-2x me-3"
                  style={{ color: "#510e6f" }}
                ></i>
                <div>
                  <h6 className="fw-bold mb-1">Our Location</h6>
                  <p className="text-muted mb-0">Manila, Philippines</p>
                </div>
              </div>
              <div className="d-flex align-items-start mb-4">
                <i
                  className="fas fa-envelope fa-2x me-3"
                  style={{ color: "#510e6f" }}
                ></i>
                <div>
                  <h6 className="fw-bold mb-1">Email Us</h6>
                  <p className="text-muted mb-0">support@fifty-glaze.com</p>
                </div>
              </div>
              <div className="d-flex align-items-start">
                <i
                  className="fas fa-phone fa-2x me-3"
                  style={{ color: "#510e6f" }}
                ></i>
                <div>
                  <h6 className="fw-bold mb-1">Call Us</h6>
                  <p className="text-muted mb-0">+63 900 000 0000</p>
                </div>
              </div>
            </div>

            {/* Right Side: Contact Form (DARK MODE) */}
            <div className="col-lg-7">
              {/* Dark Card Background */}
              <div
                className="card border-0 shadow-lg p-4 rounded-4"
                style={{ backgroundColor: "#121212" }}
              >
                {/* White Heading */}
                <h3
                  className="fw-bold mb-4 text-center"
                  style={{ color: "#ffffff" }}
                >
                  Send us a Message
                </h3>

                <form>
                  <div className="mb-3">
                    <label
                      className="form-label fw-bold"
                      style={{ color: "#cccccc" }}
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="John Doe"
                      style={{
                        backgroundColor: "#ffffff",
                        borderColor: "#333",
                        color: "#000000",
                      }}
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      className="form-label fw-bold"
                      style={{ color: "#cccccc" }}
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="john@example.com"
                      style={{
                        backgroundColor: "#ffffff",
                        borderColor: "#333",
                        color: "#000000",
                      }}
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      className="form-label fw-bold"
                      style={{ color: "#cccccc" }}
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Order Inquiry"
                      style={{
                        backgroundColor: "#ffffff",
                        borderColor: "#333",
                        color: "#000000",
                      }}
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      className="form-label fw-bold"
                      style={{ color: "#cccccc" }}
                    >
                      Message
                    </label>

                    <textarea
                      className="form-control"
                      rows="5"
                      placeholder="How can we help you?"
                      style={{
                        backgroundColor: "#ffffff",
                        borderColor: "#333",
                        color: "#000000",
                      }}
                    ></textarea>
                  </div>

                  {/* Purple Button (Unchanged) */}
                  <button
                    type="submit"
                    className="btn w-100 py-2 fw-bold text-white"
                    style={{
                      backgroundColor: "#510e6f",
                      borderColor: "#510e6f",
                    }}
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
