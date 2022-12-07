import styles from "./button.module.scss";

const Button = ({ children, onClick, type, ...btnDefaultProps }) => {
  return (
    <button
      className={styles[`${type}Button`]}
      onClick={onClick}
      {...btnDefaultProps}
    >
      {children}
    </button>
  );
};

export default Button;
