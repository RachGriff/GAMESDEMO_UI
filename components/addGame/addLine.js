import React from "react";

export const AddLine = ({ label, value, onChange }) => {
  return (
    <div>
      <span>{label}</span>
      <span>
        <input value={value} onChange={e => onChange(e.target.value)} />
      </span>
    </div>
  );
};
