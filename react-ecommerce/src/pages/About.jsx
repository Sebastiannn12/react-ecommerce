import React from "react";

const About = () => {
  return (
    <div className="container mt-5 pb-5">
      <div className="row align-items-center">
        
        <div className="col-lg-7">
          <h1 className="fw-bold mb-4" style={{ color: "#510e6f" }}>
            About Fifty-Glaze
          </h1>
          <p className="lead text-dark">
            We provide high-quality products with affordable prices, ensuring that premium 
            tech and accessories are accessible to everyone.
          </p>
          <p className="text-muted">
            This website is a modern e-commerce experience built using <b>React</b>, 
            <b> Vite</b>, <b>Bootstrap</b>, and <b>FontAwesome</b>. We focus on 
            speed, security, and a seamless user experience from browsing to checkout.
          </p>
          
          {/* Features/Values List */}
          <div className="row mt-4">
            <div className="col-md-6 mb-3">
              <div className="d-flex align-items-center">
                <i className="fas fa-check-circle fa-2x me-3" style={{ color: "#510e6f" }}></i>
                <div>
                  <h6 className="fw-bold mb-0">Quality Guaranteed</h6>
                  <small className="text-muted">Handpicked premium items.</small>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="d-flex align-items-center">
                <i className="fas fa-shipping-fast fa-2x me-3" style={{ color: "#510e6f" }}></i>
                <div>
                  <h6 className="fw-bold mb-0">Fast Delivery</h6>
                  <small className="text-muted">Secure shipping to your door.</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-5 mt-4 mt-lg-0">
          <div className="card border-0 shadow-lg bg-dark text-white p-4 rounded-4 text-center">
            <div className="display-4 mb-3" style={{ color: "#ffffff" }}>
              <i className="fas fa-store"></i>
            </div>
            <h4 className="fw-bold">Our Mission</h4>
            <p className="small opacity-75">
              To redefine online shopping by merging aesthetic design with 
              unbeatable functionality and customer support.
            </p>
            <hr className="border-secondary" />
            <p className="mb-0 fw-bold">Established 2026</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;