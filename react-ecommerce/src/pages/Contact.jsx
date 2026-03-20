import React from "react";

const Contact = () => {
  return (
    <div className="container my-5 pb-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          {/* Dark card with rounded-4 to match your Checkout/Summary style */}
          <div className="card shadow border-0 bg-dark text-white rounded-4">
            <div className="card-body p-4 p-md-5">
              <h2 className="fw-bold mb-2 text-center">Contact Us</h2>
              <p className="text-white-50 text-center mb-4">
                Have questions? We'd love to hear from you.
              </p>

              <form>
                <div className="mb-3">
                  <label className="form-label fw-bold small mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control bg-white text-dark border-0 py-2 shadow-sm"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-bold small mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control bg-white text-dark border-0 py-2 shadow-sm"
                    placeholder="name@example.com"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label fw-bold small mb-1">
                    Message
                  </label>
                  <textarea
                    className="form-control bg-white text-dark border-0 shadow-sm"
                    placeholder="How can we help you?"
                    rows="4"
                    required
                  ></textarea>
                </div>

                <div className="d-grid">
                  {/* Matching your branding violet color */}
                  <button
                    className="btn py-2 fw-bold rounded-pill shadow-sm text-white"
                    style={{ backgroundColor: "#8529af", border: "none" }}
                  >
                    <i className="fas fa-paper-plane me-2"></i>
                    Send Message
                  </button>
                </div>
              </form>

              {/* Bottom section with contact details */}
              <div className="mt-4 pt-4 border-top border-secondary text-center">
                <div className="d-flex flex-column gap-2 small">
                  <div className="d-flex align-items-center justify-content-center">
                    <i
                      className="fas fa-envelope me-2"
                      style={{ color: "#9957b8" }}
                    ></i>
                    <span className="opacity-75">support@fiftyglaze.com</span>
                  </div>
                  <div className="d-flex align-items-center justify-content-center">
                    <i
                      className="fas fa-phone me-2"
                      style={{ color: "#9957b8" }}
                    ></i>
                    <span className="opacity-75">+63 912 345 6789</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
