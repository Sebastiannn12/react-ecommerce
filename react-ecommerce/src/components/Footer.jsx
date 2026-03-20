import { Link } from "react-router-dom";

const Footer = () => {

  const footerStyle = {
    backgroundColor: "#000000", 
    color: "white",
    marginTop: "5rem"
  };

  return (
    <footer style={footerStyle} className="text-center text-lg-start py-5">
      <div className="container p-4">
        <div className="row mt-4">
          {/* Column 1: Branding */}
          <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase fw-bold mb-4">Fifty-Glaze</h5>
            <p>
              Your one-stop shop for the latest accessories and gadgets. 
              Quality tech delivered right to your door.
            </p>
            <div className="mt-4">
              <a href="#" className="text-white me-4"><i className="fab fa-facebook-f fa-lg"></i></a>
              <a href="#" className="text-white me-4"><i className="fab fa-twitter fa-lg"></i></a>
              <a href="#" className="text-white me-4"><i className="fab fa-instagram fa-lg"></i></a>
              <a href="#" className="text-white"><i className="fab fa-linkedin fa-lg"></i></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0 ps-lg-5">
            <h5 className="text-uppercase fw-bold mb-4">Quick Links</h5>
            <ul className="list-unstyled mb-0">
              <li className="mb-2"><Link to="/" className="text-white text-decoration-none">Home</Link></li>
              <li className="mb-2"><Link to="/products" className="text-white text-decoration-none">Products</Link></li>
              <li className="mb-2"><Link to="/about" className="text-white text-decoration-none">About Us</Link></li>
              <li className="mb-2"><Link to="/policies" className="text-white text-decoration-none">Store Policies</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase fw-bold mb-4">Contact</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><i className="fas fa-envelope me-3"></i> support@fiftyglaze.com</li>
              <li className="mb-2"><i className="fas fa-phone me-3"></i> +63 123 456 7890</li>
              <li><i className="fas fa-map-marker-alt me-3"></i> Manila, Philippines</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="text-center p-3 border-top border-light border-opacity-10" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
        &copy; 2026 <span className="fw-bold">Fifty-Glaze</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;