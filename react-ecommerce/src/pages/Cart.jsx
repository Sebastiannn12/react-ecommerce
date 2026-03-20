import { useContext } from "react";
import { CartContext } from '../context/cartContext';
import { Link } from "react-router-dom";

const Cart = () => {
  // Access global cart state and actions from Context (no prop drilling)
  const { cart, removeFromCart, increaseQty, decreaseQty } =
    useContext(CartContext);

  // Compute total price from global cart state
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  // Helper function to format currency (Philippine peso format)
  const formatPrice = (value) => {
    return value.toLocaleString("en-PH", {
      minimumFractionDigits: 2, 
      maximumFractionDigits: 2,
    });
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4"> Shopping Cart</h2>

      {/* Conditional rendering based on global cart state */}
      {cart.length === 0 && (
        <div className="alert alert-info">Your cart is empty.</div>
      )}

      {cart.map((item) => (
        <div key={item.id} className="card mb-3 shadow-sm">
          <div className="card-body">
            <div className="row align-items-center">
              
              {/* 1. Image on the Left - Reduced margin bottom */}
              <div className="col-12 col-md-2 text-center mb-0 pb-0">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="img-fluid"
                  style={{ maxHeight: "80px", objectFit: "contain" }}
                />
              </div>
              
              {/* 2. Product Info - Adjusted to col-md-3 */}
              <div className="col-12 col-md-3 mb-3 mb-md-0">
                <h5 className="mb-1">{item.name}</h5>
                <small className="text-muted">₱{formatPrice(item.price)}</small>
              </div>

              {/* 3. Quantity Controls - Adjusted to col-md-4 */}
              <div className="col-12 col-md-4 mb-3 mb-md-0 text-center">
                <div className="d-flex justify-content-center align-items-center">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="btn btn-outline-secondary btn-sm"
                  >
                    -
                  </button>
                    
                  <span className="mx-3 fw-bold">{item.qty}</span>

                  <button
                    onClick={() => increaseQty(item.id)}
                    className="btn btn-outline-secondary btn-sm"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* 4. Remove Button - Adjusted to col-md-3 */}
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

      {/* Total Section (derived from Context state) */}
      {cart.length > 0 && (
        <div className="card shadow mt-4">
          <div className="card-body d-flex flex-column flex-md-row justify-content-between align-items-center">
            <h4 className="mb-3 mb-md-0">Total: ₱{formatPrice(total)}</h4>

            <Link to="/checkout" className="btn btn-success btn-lg">
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;