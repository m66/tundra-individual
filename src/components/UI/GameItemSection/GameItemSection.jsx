import React from "react";
import Button from "../../Forms/Button/Button";

import styles from "./GameItemSection.module.scss";

const GameItemSection = ({
  id,
  title,
  description,
  description2,
  imgUrl,
  price,
  handleSelect,
  selectedGamesArr,
}) => {
  let isSelected = false;

  selectedGamesArr.forEach((item) => {
    if (item.id === id) isSelected = true;
  });

  return (
    <div className={styles.GameItemSection}>
      <div className={styles.imgWrapper}>
        <img src={`${imgUrl}`} alt={title} />
      </div>
      <div className={styles.description}>
        <h2>{title.toUpperCase()}</h2>
        <p className={styles.disc1}>{description}</p>
        {description2 && <p>{description2}</p>}
      </div>

      <div className={styles.action}>
        <p>
          PRICE: <span className={styles.price}>{price}$</span>
        </p>
        <Button onClick={() => handleSelect(id)} type='primary'>
          {isSelected ? "REMOVE" : "SELECT"}
        </Button>
      </div>
    </div>
  );
};

export default GameItemSection;
