import React, { useState } from "react";

import PaymentDetails from "../../components/UI/PaymentDetails/PaymentDetails";
import GameTabs from "../../components/UI/GameTabs/GameTabs";
import SubTotal from "../../components/UI/SubTotal/SubTotal";
import TabItems from "../../components/UI/TabItems/TabItems";
import Summary from "../../components/UI/Summary/Summary";

import { individualGamesData } from "../../constants/const";

import styles from "./marketPlace.module.scss";

const MarketPlace = () => {
  const [tabValue, setTabValue] = useState("individual");
  const [selectedGamesArr, setSelectedGamesArr] = useState([]);
  const [paymantData, setPaymantData] = useState({
    name: "",
    number: "",
    date: "",
    code: "",
    address: "",
    email: "",
    errors: null,
  });

  function handleTabChange(tabValue) {
    setTabValue(tabValue);
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

  function handleSubmitData(e) {
    const userData = Object.keys(paymantData)
      .filter((key) => key !== "errors")
      .reduce((cur, key) => {
        return Object.assign(cur, { [key]: paymantData[key] });
      }, {});

    const data = {
      userData: {
        ...userData,
      },
      selectedGamesId: selectedGamesArr.map((i) => i.id),
    };

    console.log(data);
  }

  return (
    <div className={styles.marketPlace}>
      <TabItems handleClick={handleTabChange} tabValue={tabValue} />
      <GameTabs
        handleSelectGame={handleSelectGame}
        selectedGamesArr={selectedGamesArr}
        tabValue={tabValue}
      />
      <Summary
        selectedGamesArr={selectedGamesArr}
        handleRemoveItem={handleRemoveItem}
      />
      <SubTotal selectedGamesArr={selectedGamesArr} />
      <PaymentDetails
        handleSubmitData={handleSubmitData}
        setPaymantData={setPaymantData}
        paymantData={paymantData}
      />
    </div>
  );
};

export default MarketPlace;
