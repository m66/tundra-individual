import React from "react";

import styles from "./tabItems.module.scss";

const TabItems = ({ handlecklick, tabvalue }) => {
  return (
    <div className={styles.tabItems}>
      <ul>
        <li
          style={{ color: tabvalue === 1 && "#fff"}}
          onClick={() => {
            handlecklick(1);
          }}
        >
          Individual
        </li>
        <li
          style={{ color: tabvalue === 2 && "#fff"}}
          onClick={() => {
            handlecklick(2);
          }}
        >
          Package
        </li>
      </ul>
    </div>
  );
};

export default TabItems;
