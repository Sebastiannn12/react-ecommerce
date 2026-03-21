import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const totalQty = cart.reduce((qty, item) => qty + item.qty, 0);
  const customColor = "#291934";

  return (
    <>
      {/* DESKTOP NAVBAR */}
      <nav
        className="navbar navbar-expand-lg navbar-dark shadow-sm d-none d-lg-block"
        style={{ backgroundColor: customColor, padding: "12px 0" }}
      >
        <div className="container">
          <Link
            className="navbar-brand d-flex align-items-center fw-bold"
            to="/"
          >
            {/* UPDATED: Slightly larger logo for better visibility */}
            <img
              src="/images/pclogo.png"
              alt="Logo"
              width="90"
              height="60"
              className="me-2 object-fit-contain"
            />
            <span>Fifty-Glaze</span>
          </Link>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/policies">
                  Policies
                </NavLink>
              </li>
            </ul>

            <Link
              to="/cart"
              className="btn btn-outline-light position-relative"
            >
              Cart 🛒
              {totalQty > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {totalQty}
                </span>
              )}
            </Link>
          </div>
        </div>
      </nav>

      {/* MOBILE BOTTOM NAVIGATION */}
      <nav
        className="navbar fixed-bottom d-lg-none shadow-lg"
        style={{
          backgroundColor: customColor,
          borderTop: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <div className="container-fluid d-flex justify-content-around text-center py-2">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? "text-secondary text-decoration-none"
                : "text-white text-decoration-none"
            }
          >
            <div>
              <i className="fa fa-home fs-5"></i>
              <div style={{ fontSize: "12px" }}>Home</div>
            </div>
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive
                ? "text-secondary text-decoration-none"
                : "text-white text-decoration-none"
            }
          >
            <div>
              <i className="fa fa-th-large fs-5"></i>
              <div style={{ fontSize: "12px" }}>Products</div>
            </div>
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive
                ? "text-secondary text-decoration-none position-relative"
                : "text-white text-decoration-none position-relative"
            }
          >
            <div className="position-relative">
              <i className="fa fa-shopping-cart fs-5"></i>
              {totalQty > 0 && (
                <span
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                  style={{ fontSize: "10px" }}
                >
                  {totalQty}
                </span>
              )}
              <div style={{ fontSize: "12px" }}>Cart</div>
            </div>
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-secondary text-decoration-none"
                : "text-white text-decoration-none"
            }
          >
            <div>
              <i className="fa fa-info-circle fs-5"></i>
              <div style={{ fontSize: "12px" }}>About</div>
            </div>
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-secondary text-decoration-none"
                : "text-white text-decoration-none"
            }
          >
            <div>
              <i className="fa fa-phone fs-5"></i>
              <div style={{ fontSize: "12px" }}>Contact</div>
            </div>
          </NavLink>

          <NavLink
            to="/policies"
            className={({ isActive }) =>
              isActive
                ? "text-secondary text-decoration-none"
                : "text-white text-decoration-none"
            }
          >
            <div>
              <i className="fa fa-file-contract fs-5"></i>
              <div style={{ fontSize: "12px" }}>Policies</div>
            </div>
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;