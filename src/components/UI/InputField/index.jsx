import React from "react";
import "./inputField.css";

const InputField = ({
  type,
  placeholder,
  name,
  value,
  onChange,
  id,
  label,
}) => {
  return (
    <div className="form_input_group">
      {label && (
        <label htmlFor={id} className="input_label">
          {label}
        </label>
      )}
      <input
        className="form_input"
        type={type || "text"}
        name={name}
        value={value}
        onChange={onChange}
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
