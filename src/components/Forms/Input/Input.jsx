import styles from "./input.module.scss";

const Input = ({ label, name, onChange, errorMessage, ...inputDefaultProps }) => {

  return (
    <div className={styles.paymentInput}>
      <label>{label}</label>
      <input
        type="text"
        name={name}
        onChange={onChange}
        className={errorMessage && styles.errorBorder}
        {...inputDefaultProps}
      />
      <p className={styles.errorMessage}>{errorMessage}</p>
    </div>
  );
};

export default Input;