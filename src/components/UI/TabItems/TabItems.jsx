import styles from "./tabItems.module.scss";

const TabItems = ({ handleClick, tabValue }) => {
  return (
    <div className={styles.tabItems}>
      <ul>
        <li
          style={{ color: tabValue === 'individual' && "#fff"}}
          onClick={() => {
            handleClick('individual');
          }}
        >
          Individual
        </li>
        <li
          style={{ color: tabValue === 'package' && "#fff"}}
          onClick={() => {
            handleClick('package');
          }}
        >
          Package
        </li>
      </ul>
    </div>
  );
};

export default TabItems;
