import React from "react";
// import {} from 'rs'

const CheckboxInput = ({ label, type = "text", placeholder }) => {
  const checkbox1 = [
    { key: 1, label: "Single", value: "single" },
    { key: 2, label: "Married", value: "married" },
    { key: 3, label: "Widowed", value: "widowed" },
  ];
  return (
    <div className="form-group group" style={{ width: "100%" }}>
      <div>
        <label htmlFor="">Marital Status</label>
      </div>
    </div>
  );
};

export default CheckboxInput;
