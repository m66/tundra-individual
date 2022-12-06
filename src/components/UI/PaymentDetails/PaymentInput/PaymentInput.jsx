import React, { useState } from "react";
import { validations } from "../../../../helpers/validation";
import styles from "./paymentInput.module.scss";

const PaymentInput = ({
  label,
  placeholder,
  name,
  handleChange,
}) => {
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <div className={styles.paymentInput}>
      <label>{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => {
          setErrorMessage(validations[name](e.target.value));
          handleChange(errorMessage ? '' : e.target.value, name);
        }}
      />
      <p className={styles.errorMessage}>{errorMessage}</p>
    </div>
  );
};

export default PaymentInput;
