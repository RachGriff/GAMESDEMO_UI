import React from "react";
import styles from "./addGame.css";

export const AddLine = ({ label, value, onChange }) => {
  return (
    <div>
      <span className={styles.labelSpan}>{label}</span>
      <span className={styles.InputSpan}>
        <input value={value} onChange={e => onChange(e.target.value)} />
      </span>
    </div>
  );
};
