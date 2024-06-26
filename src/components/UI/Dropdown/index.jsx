import React from "react";
import "./dropdown.css";

const Dropdown = ({
  name,
  label,
  options,
  placeholder,
  id,
  onChange,
  value,
  style,
}) => {
  return (
    <div className="dropdown" style={style}>
      <label htmlFor={id} className="dropdown_label">
        {label}
      </label>
      <select
        name={name}
        id={id}
        className="dropdown_select"
        onChange={onChange}
        value={value}
      >
        {placeholder && (
          <option value="" selected disabled>
            {placeholder}
          </option>
        )}
        {options.map((each, i) => (
          <option key={i} value={each.value} className="dropdown_select_option">
            {each.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
