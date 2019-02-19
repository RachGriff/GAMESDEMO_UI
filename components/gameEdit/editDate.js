import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export const EditDate = ({ label, value, onChange }) => {
  return (
    <div>
      <span>{label}</span>
      <span>
        <DatePicker
          selected={value}
          onChange={onChange}
          dateFormat="DD/MM/YYYY"
        />
      </span>
    </div>
  );
};
