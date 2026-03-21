import React from "react";

const Contact = () => {
  const darkBg = "#1e122b"; // Your brand color

  return (
    <>
      {/* 1. Top Separator Bar (Visible on ALL devices) */}
      <div style={{ 
        backgroundColor: darkBg, 
        height: "10px", 
        width: "100%",
        flexShrink: 0 
      }}></div>

      {/* 2. Mobile-Only Header (Logo + Name) */}
      <div className="d-lg-none" style={{ 
        backgroundColor: darkBg,
        padding: "0.8rem 1rem",
        textAlign: "center",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        boxShadow: "0 2px 5px rgba(0,0,0,0.2)"
      }}>
        <div className="d-flex align-items-center justify-content-center gap-2">
          <img 
            src="/images/pclogo.png" 
            alt="Fifty-Glaze Logo" 
            width="32" 
            height="32" 
            className="object-fit-contain"
          />
          <span style={{ 
            color: "#ffffff", 
            fontSize: "1.1rem", 
            fontWeight: "700",
            letterSpacing: "0.5px"
          }}>
            Fifty-Glaze
          </span>
        </div>
      </div>

      {/* 3. Main Content Wrapper (Light Gray Background, Full Height) */}
      <div style={{ 
        backgroundColor: "#f5f5f5", 
        minHeight: "100vh", 
        paddingBottom: "6rem" 
      }}>
        <div className="container mt-5 pb-5">
          <div className="row justify-content-center">
            
            {/* Left Side: Contact Info */}
            <div className="col-lg-5 mb-5 mb-lg-0">
              <h1 className="fw-bold mb-4" style={{ color: "#510e6f" }}>
                Get in Touch
              </h1>
              <p className="lead text-dark mb-4">
                Have questions about our products or orders? We're here to help!
              </p>
              
              <div className="d-flex align-items-start mb-4">
                <i className="fas fa-map-marker-alt fa-2x me-3" style={{ color: "#510e6f" }}></i>
                <div>
                  <h6 className="fw-bold mb-1">Our Location</h6>
                  <p className="text-muted mb-0">Manila, Philippines</p>
                </div>
              </div>

              <div className="d-flex align-items-start mb-4">
                <i className="fas fa-envelope fa-2x me-3" style={{ color: "#510e6f" }}></i>
                <div>
                  <h6 className="fw-bold mb-1">Email Us</h6>
                  <p className="text-muted mb-0">support@fifty-glaze.com</p>
                </div>
              </div>

              <div className="d-flex align-items-start">
                <i className="fas fa-phone fa-2x me-3" style={{ color: "#510e6f" }}></i>
                <div>
                  <h6 className="fw-bold mb-1">Call Us</h6>
                  <p className="text-muted mb-0">+63 900 000 0000</p>
                </div>
              </div>
            </div>

            {/* Right Side: Contact Form */}
            <div className="col-lg-7">
              <div className="card border-0 shadow-lg p-4 rounded-4">
                <h3 className="fw-bold mb-4 text-center" style={{ color: "#1e122b" }}>Send us a Message</h3>
                <form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label fw-bold">Full Name</label>
                    <input type="text" className="form-control" id="name" placeholder="John Doe" />
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label fw-bold">Email Address</label>
                    <input type="email" className="form-control" id="email" placeholder="john@example.com" />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label fw-bold">Subject</label>
                    <input type="text" className="form-control" id="subject" placeholder="Order Inquiry" />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="message" className="form-label fw-bold">Message</label>
                    <textarea className="form-control" id="message" rows="5" placeholder="How can we help you?"></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary w-100 py-2 fw-bold" style={{ backgroundColor: "#510e6f", borderColor: "#510e6f" }}>
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