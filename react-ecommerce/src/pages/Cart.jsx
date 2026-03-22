import { useContext } from "react";
import { CartContext } from '../context/CartContext';
import { Link } from "react-router-dom";

const Cart = () => {
  const darkBg = "#1e122b";
  
  const { cart, removeFromCart, increaseQty, decreaseQty } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const formatPrice = (value) => {
    return value.toLocaleString("en-PH", {
      minimumFractionDigits: 2, 
      maximumFractionDigits: 2,
    });
  };

  return (
    <>
      <div style={{ 
        backgroundColor: darkBg, 
        height: "10px", 
        width: "100%",
        flexShrink: 0 
      }}></div>

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

      <div style={{ 
        backgroundColor: "#ffffff", 
        paddingBottom: "6rem",
        flexGrow: 1
      }}>
        <div className="container my-5">
          <h2 className="mb-4" style={{ color: "#1e122b", fontWeight: "bold" }}>
            Shopping Cart
          </h2>

          {cart.length === 0 && (
            <div className="alert alert-info shadow-sm">
              Your cart is empty. <Link to="/products" className="alert-link">Go shopping!</Link>
            </div>
          )}

          {cart.map((item) => (
            <div key={item.id} className="card mb-3 shadow-sm border-0">
              <div className="card-body">
                <div className="row align-items-center">
                  
                  <div className="col-12 col-md-2 text-center mb-2 mb-md-0">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="img-fluid rounded"
                      style={{ maxHeight: "80px", objectFit: "contain" }}
                    />
                  </div>
                  
                  <div className="col-12 col-md-3 mb-3 mb-md-0 text-center text-md-start">
                    <h5 className="mb-1 fw-bold">{item.name}</h5>
                    <small className="text-muted">₱{formatPrice(item.price)}</small>
                  </div>

                  <div className="col-12 col-md-4 mb-3 mb-md-0 text-center">
                    <div className="d-flex justify-content-center align-items-center">
                      <button
                        onClick={() => decreaseQty(item.id)}
                        className="btn btn-outline-secondary btn-sm"
                        style={{ width: "35px" }}
                      >
                        -
                      </button>
                        
                      <span className="mx-3 fw-bold">{item.qty}</span>

                      <button
                        onClick={() => increaseQty(item.id)}
                        className="btn btn-outline-secondary btn-sm"
                        style={{ width: "35px" }}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="col-12 col-md-3 text-center text-md-end">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="btn btn-outline-danger btn-sm"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {cart.length > 0 && (
            <div className="card shadow mt-4 border-0">
              <div className="card-body d-flex flex-column flex-md-row justify-content-between align-items-center p-4">
                <h4 className="mb-3 mb-md-0 fw-bold" style={{ color: "#1e122b" }}>
                  Total: ₱{formatPrice(total)}
                </h4>

                <Link to="/checkout" className="btn btn-success btn-lg px-4">
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;