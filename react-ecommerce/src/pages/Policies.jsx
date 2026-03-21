import React from "react";

const Policies = () => {
  const darkBg = "#1e122b"; // Your brand color

  const policySections = [
    {
      title: "1. Store Rules",
      icon: "fa-gavel",
      items: [
        "All products are subject to availability.",
        "Prices and discounts may change without prior notice.",
        "Orders must be placed with accurate information.",
        "We reserve the right to cancel or refuse orders that violate our policies.",
      ],
    },
    {
      title: "2. Payment",
      icon: "fa-credit-card",
      items: [
        "Payments must be completed at the time of purchase.",
        "Accepted payment methods are: Credit/Debit Card, GCash, and Cash on Delivery.",
      ],
    },
    {
      title: "3. Shipping & Delivery",
      icon: "fa-truck",
      items: [
        "Shipping times may vary depending on location.",
        "We are not responsible for delays caused by courier services.",
      ],
    },
    {
      title: "4. Returns & Refunds",
      icon: "fa-undo",
      items: [
        "Products can be returned within 7 days if they are defective or damaged.",
        "Refunds will be processed after inspection of the returned item.",
      ],
    },
    {
      title: "5. Customer Responsibility",
      icon: "fa-user-shield",
      items: [
        "Customers must provide correct shipping and contact details.",
        "Any misuse of the store may result in account suspension.",
      ],
    },
  ];

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
        <div className="container my-5 pb-5">
          <div className="text-center mb-5">
            <h1 className="fw-bold" style={{ color: "#510e6f" }}>
              Store Policies
            </h1>
            <p className="text-muted">
              Please read our terms and conditions carefully.
            </p>
          </div>

          <div className="row">
            {policySections.map((section, index) => (
              <div className="col-lg-6 mb-4" key={index}>
                {/* Using bg-dark and rounded-4 to match Checkout/Summary cards */}
                <div className="card border-0 shadow bg-dark text-white h-100 rounded-4 overflow-hidden">
                  <div
                    className="card-header border-0 p-4 d-flex align-items-center"
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                  >
                    <i
                      className={`fas ${section.icon} me-3 fa-lg`}
                      style={{ color: "#c49bd7" }}
                    ></i>
                    <h5 className="mb-0 fw-bold">{section.title}</h5>
                  </div>

                  <div className="card-body p-4">
                    <ul className="list-unstyled mb-0">
                      {section.items.map((item, idx) => (
                        <li key={idx} className="mb-3 d-flex align-items-start">
                          <i
                            className="fas fa-circle me-2 mt-2"
                            style={{ fontSize: "6px", color: "#ad8fbb" }}
                          ></i>
                          <span className="opacity-75">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Policies;