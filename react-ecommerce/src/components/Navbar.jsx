import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const cartCount = cart.reduce((qty, item) => qty + item.qty, 0);

  const customColor = "#291934";

  const navStyle = {
    backgroundColor: customColor,
    paddingTop: "12px",
    paddingBottom: "12px",
    transition: "background-color 0.3s ease",
  };

  const navLinkStyle = ({ isActive }) => ({
    color: isActive ? "#b4becd" : "white",
    fontWeight: "bold",
    textDecoration: "none",
  });

  return (
    <>
      {/* DESKTOP NAVBAR */}
      <nav
        className="navbar navbar-expand-lg navbar-dark shadow-sm d-none d-lg-block"
        style={navStyle}
      >
        <div className="container">
          <Link
            className="navbar-brand d-flex align-items-center fw-bold"
            to="/"
          >
            <img
              src="/images/pclogo.png"
              alt="Logo"
              width="80"
              height="50"
              className="me-2"
            />
            <span className="fs-4 tracking-tight">Fifty-Glaze</span>
          </Link>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" style={navLinkStyle} to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  style={navLinkStyle}
                  to="/products"
                >
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" style={navLinkStyle} to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  style={navLinkStyle}
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  style={navLinkStyle}
                  to="/policies"
                >
                  Policies
                </NavLink>
              </li>
            </ul>

            <Link
              to="/cart"
              className="btn btn-outline-light position-relative"
            >
              Cart 🛒
              {cartCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </nav>

      {/* MOBILE BOTTOM NAVBAR - Now also uses your customColor */}
      <nav
        className="navbar fixed-bottom d-lg-none shadow-lg border-top border-secondary"
        style={navStyle}
      >
        <div className="container-fluid d-flex justify-content-around text-center py-2">
          <NavLink
            to="/"
            end
            className="text-decoration-none"
            style={navLinkStyle}
          >
            <i className="fa fa-home fs-5"></i>
            <div style={{ fontSize: "12px" }}>Home</div>
          </NavLink>

          <NavLink
            to="/products"
            className="text-decoration-none"
            style={navLinkStyle}
          >
            <i className="fa fa-box fs-5"></i>
            <div style={{ fontSize: "12px" }}>Products</div>
          </NavLink>

          <NavLink
            to="/cart"
            className="text-decoration-none position-relative"
            style={navLinkStyle}
          >
            <div className="position-relative">
              <i className="fa fa-shopping-cart fs-5"></i>
              {cartCount > 0 && (
                <span
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                  style={{ fontSize: "10px" }}
                >
                  {cartCount}
                </span>
              )}
            </div>
            <div style={{ fontSize: "12px" }}>Cart</div>
          </NavLink>

          <NavLink
            to="/about"
            className="text-decoration-none"
            style={navLinkStyle}
          >
            <i className="fa fa-info-circle fs-5"></i>
            <div style={{ fontSize: "12px" }}>About</div>
          </NavLink>

          <NavLink
            to="/contact"
            className="text-decoration-none"
            style={navLinkStyle}
          >
            <i className="fa fa-phone fs-5"></i>
            <div style={{ fontSize: "12px" }}>Contact</div>
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
