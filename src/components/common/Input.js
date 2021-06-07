import React from "react";

const Input = ({label, type='text', placeholder}) => {
  return (
      <div className="form-group" style={{width: '100%'}}>
        <label htmlFor="">{label}</label>
        <input type={type} class="form-control" placeholder={placeholder}/>
      </div>
  );
};

export default Input;
