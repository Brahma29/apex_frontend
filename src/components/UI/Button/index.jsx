import React from "react";

const Button = ({ title, onClick, bgColor, textColor }) => {
  return (
    <button
      onClick={onClick}
      className="button"
      style={{
        padding: "0.75rem 1.75rem",
        backgroundColor: bgColor,
        color: textColor,
        border: "none",
        borderRadius: 4,
      }}
    >
      {title}
    </button>
  );
};

export default Button;
