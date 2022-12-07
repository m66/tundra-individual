import Input from "../../Forms/Input/Input";

import { validations } from "../../../helpers/validation";

import styles from "./paymentDetails.module.scss";
import Button from "../../Forms/Button/Button";

const PaymentDetails = ({ paymantData, setPaymantData, handleSubmitData }) => {
  let isDisabel = false;

  function handleChange(e) {
    const { value, name } = e.target;

    setPaymantData((prev) => {
      let err = validations[name](e.target.value);

      return {
        ...prev,
        [name]: value,
        errors: {
          ...prev.errors,
          [name]: err,
        },
      };
    });
  }

  for (let key in paymantData) {
    if (
      paymantData[key] === "" ||
      (paymantData.errors && paymantData.errors[key])
    )
      isDisabel = true;
  }

  return (
    <div className={`content ${styles.paymentDetails}`}>
      <h2>PAYMANT DETAILS</h2>
      <form className={styles.inputsSection}>
        <div className={styles.inputsWrapper}>
          <Input
            label={"NAME ON CARD"}
            placeholder={"JOHN SMITH"}
            name="name"
            onChange={handleChange}
            errorMessage={paymantData.errors?.name}
          />
          <Input
            label={"CARD NUMBER"}
            placeholder={"1234 5678 9101 1123"}
            name="number"
            onChange={handleChange}
            errorMessage={paymantData.errors?.number}
          />
        </div>
        <div className={styles.inputsWrapper}>
          <div className={`${styles.expSecurInputs} ${styles.inputsWrapper}`}>
            <Input
              name="date"
              placeholder={"MM/YY"}
              onChange={handleChange}
              label={"EXPIRATION DATE"}
              errorMessage={paymantData.errors?.date}
            />
            <Input
              label={"SECURITY CODE"}
              placeholder={"CVC"}
              name="code"
              onChange={handleChange}
              errorMessage={paymantData.errors?.code}
            />
          </div>
          <Input
            label={"BILLING ADDRESS"}
            placeholder={"JOHN SMITH"}
            name="address"
            onChange={handleChange}
            errorMessage={paymantData.errors?.address}
          />
        </div>
        <div className={styles.mailInput}>
          <Input
            label={"EMAIL"}
            placeholder={"JOHNSMITH@GMAIL.COM"}
            name="email"
            onChange={handleChange}
            errorMessage={paymantData.errors?.email}
          />
        </div>
      </form>
      <div className={styles.payBtn}>
        <Button
          disabled={isDisabel && "disabled"}
          type="secondary"
          onClick={handleSubmitData}
        >
          PAY NOW
        </Button>
      </div>
    </div>
  );
};

export default PaymentDetails;
