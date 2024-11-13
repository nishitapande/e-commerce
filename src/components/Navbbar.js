import React from "react";

const Navbbar = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
          backgroundColor: "lightgray",
          height: "50px",
          alignItems: "center",
          margin: "0 20px",
        }}
      >
        <div>Logo</div>
        <div>Main Link</div>
        <div>login</div>
      </div>
    </div>
  );
};

export default Navbbar;
