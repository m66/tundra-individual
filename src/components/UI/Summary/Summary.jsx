import React from "react";
import SummaryItem from "./SummaryItem/SummaryItem";

import styles from "./summary.module.scss";

const Summary = ({ selectedGamesArr, handleRemoveItem }) => {
  return (
    <div className={`content ${styles.summary}`}>
      {
        selectedGamesArr.length !== 0 && <h2>Summary</h2>
      }
      {selectedGamesArr.map((item) => (
        <SummaryItem
          key={item.id}
          item={item}
          handleRemoveItem={handleRemoveItem}
        />
      ))}
    </div>
  );
};

export default Summary;
