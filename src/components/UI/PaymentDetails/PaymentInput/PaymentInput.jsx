import React from "react";

import styles from "./paymentInput.module.scss";

const PaymentInput = ({ label, placeholder, name, handleChange }) => {
  return (
    <div className={styles.paymentInput}>
      <label>{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => handleChange(e.target.value, name)}
      />
    </div>
  );
};

export default PaymentInput;
