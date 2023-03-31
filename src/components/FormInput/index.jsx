import React from "react";
import "./style.css";

const FormInput = ({ label, type, value, onChange }) => (
  <div>
    <label className="form-input-label" htmlFor="">
      {label}
    </label>
    <input
      className="form-input"
      type={type}
      defaultValue={value}
      onChange={onChange}
    />
  </div>
);

export default FormInput;
