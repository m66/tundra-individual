import React, { useState } from "react";
import PaymentInput from "./PaymentInput/PaymentInput";

import styles from "./paymentDetails.module.scss";

const PaymentDetails = () => {
  const [paymantData, setPaymantData] = useState({
    name: "",
    number: "",
    date: "",
    code: "",
    address: "",
    email: "",
  });

  function handleChange(value, name) {
    setPaymantData(prev => {
      return {
        ...prev,
        [name]: value
      }
    });
  }

  return (
    <div className={`content ${styles.paymentDetails}`}>
      <h2>PAYMANT DETAILS</h2>
      <div className={styles.inputsSection}>
        <div className={styles.inputsWrapper}>
          <PaymentInput
            label={"NAME ON CARD"}
            placeholder={"JOHN SMITH"}
            name="name"
            handleChange={handleChange}
          />
          <PaymentInput
            label={"CARD NUMBER"}
            placeholder={"1234 5678 9101 1123"}
            name="number"
            handleChange={handleChange}
          />
        </div>
        <div className={styles.inputsWrapper}>
          <div className={`${styles.expSecurInputs} ${styles.inputsWrapper}`}>
            <PaymentInput
              label={"EXPIRATION DATE"}
              placeholder={"MM/YY"}
              name="date"
              handleChange={handleChange}
            />
            <PaymentInput
              label={"SECURITY CODE"}
              placeholder={"CVC"}
              name="code"
              handleChange={handleChange}
            />
          </div>
          <PaymentInput
            label={"BILLING ADDRESS"}
            placeholder={"JOHN SMITH"}
            name="address"
            handleChange={handleChange}
          />
        </div>
        <div className={styles.mailInput}>
          <PaymentInput
            label={"EMAIL"}
            placeholder={"JOHNSMITH@GMAIL.COM"}
            name="email"
            handleChange={handleChange}
          />
        </div>
      </div>
      <div className={styles.payBtn}>
        <button>PAY NOW</button>
      </div>
    </div>
  );
};

export default PaymentDetails;
