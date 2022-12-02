import React, { useState } from "react";

import PaymentDetails from "../../components/UI/PaymentDetails/PaymentDetails";
import IndividualTab from "../../components/UI/IndividualTab/IndividualTab";
import PackagesTab from "../../components/UI/PackagesTab/PackagesTab";
import SubTotal from "../../components/UI/SubTotal/SubTotal";
import TabItems from "../../components/UI/TabItems/TabItems";
import { individualGamesData } from "../../constants/const";
import Summary from "../../components/UI/Summary/Summary";

import styles from "./marketPlace.module.scss";

const MarketPlace = () => {

  const [tabvalue, setTabvalue] = useState(1);
  const [selectedGamesArr, setSelectedGamesArr] = useState([]);

  function handletabchange(tabvalue) {
    setTabvalue(tabvalue);
  }

  function handleSelectGame(id) {
    let isExist = false;
    for (let i = 0; i < selectedGamesArr.length; i++) {
      if (selectedGamesArr[i].id === id) {
        isExist = true;
      }
    }

    if (isExist) {
      setSelectedGamesArr((prev) => prev.filter((i) => i.id !== id));
    } else {
      setSelectedGamesArr((prev) => [...prev, individualGamesData[id]]);
    }
  }

  function handleRemoveItem(id) {
    setSelectedGamesArr((prev) => prev.filter((i) => i.id !== id));
  }

  return (
    <div className={styles.marketPlace}>
      <TabItems handlecklick={handletabchange} tabvalue={tabvalue} />
      {tabvalue === 1 ? (
        <IndividualTab
          handleSelectGame={handleSelectGame}
          selectedGamesArr={selectedGamesArr}
        />
      ) : (
        <PackagesTab
          handleSelectGame={handleSelectGame}
          selectedGamesArr={selectedGamesArr}
        />
      )}
      <Summary
        selectedGamesArr={selectedGamesArr}
        handleRemoveItem={handleRemoveItem}
      />
      <SubTotal selectedGamesArr={selectedGamesArr} />
      <PaymentDetails />
    </div>
  );
};

export default MarketPlace;