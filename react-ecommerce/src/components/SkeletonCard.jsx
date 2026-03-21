import React from "react";

const SkeletonCard = () => {
  return (
    <div className="card shadow-sm border-0 h-100" aria-hidden="true">

      <div className="placeholder-glow">
        <div
          className="placeholder col-12 bg-secondary opacity-25"
          style={{ height: "200px", borderRadius: "8px 8px 0 0" }}
        ></div>
      </div>

      <div className="card-body">

        <h5 className="card-title placeholder-glow">
          <span className="placeholder col-8 bg-secondary opacity-50"></span>
        </h5>


        <p className="card-text placeholder-glow mb-0">
          <span className="placeholder col-11 bg-secondary opacity-25"></span>
          <span className="placeholder col-7 bg-secondary opacity-25"></span>
        </p>


        <div className="placeholder-glow mt-3">
          <span
            className="placeholder col-12 btn btn-primary disabled"
            style={{ height: "38px" }}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
