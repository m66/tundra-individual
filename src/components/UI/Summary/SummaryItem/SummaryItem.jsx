import React from "react";
import styles from "./summaryItem.module.scss";

const SummaryItem = ({ item, handleRemoveItem }) => {
  return (
    <div className={styles.summaryItem}>
      <div className={styles.imgWrapper}>
        <img src={item.imgUrl} alt="" />
      </div>
      <div className={styles.description}>
        <div className={styles.content}>
          <p className={styles.title}>{item.title.toUpperCase()}</p>
          <p className={styles.priceTitle}>
            PRICE: <span className={styles.price}>{item.price}$</span>
          </p>
        </div>
        <div className={styles.closeBtn}>
          <button onClick={() => handleRemoveItem(item.id)}>X</button>
        </div>
      </div>
    </div>
  );
};

export default SummaryItem;
