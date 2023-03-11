import React from "react";
import "./style.css";

const FormTextarea = ({resize, label, value, rows }) => {
  let className = "form-textarea";
  if (resize) {
    className += " form-textarea-resizable";
  }

  return (
    <div>
      <label className="form-textarea-label" htmlFor="">
        {label}
      </label>
      <textarea
        className={className}
        value={value}
        rows={rows || 2}
      />
    </div>
  );
};

export default FormTextarea;
