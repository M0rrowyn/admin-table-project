import React from "react";
import "./style.css";

const AdminTableButton = ({ onClick, image, text }) => (
  <button className="admin-button" onClick={onClick}>
    {image}
    {text}
  </button>
);

export default AdminTableButton;
