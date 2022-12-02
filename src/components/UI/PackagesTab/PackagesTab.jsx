import React from "react";
import { individualGamesData } from "../../../constants/const";
import GameItemSection from "../GameItemSection/GameItemSection";

const PackagesTab = ({ handleSelectGame, selectedGamesArr }) => {
  return (
    <div className="content">
      {individualGamesData.map((gameItem) => {
        return gameItem.type === "package" ? (
          <GameItemSection
            key={gameItem.id}
            handleSelect={handleSelectGame}
            selectedGamesArr={selectedGamesArr}
            {...gameItem}
          />
        ) : null;
      })}
    </div>
  );
};

export default PackagesTab;
