import { individualGamesData } from "../../../constants/const";
import GameItemSection from "../GameItemSection/GameItemSection";

const IndividualTab = ({ handleSelectGame, selectedGamesArr, tabValue }) => {
  return (
    <div className="content">
      {individualGamesData.map((gameItem) => {
        return gameItem.type === tabValue ?
        <GameItemSection
          key={gameItem.id}
          handleSelect={handleSelectGame}
          selectedGamesArr={selectedGamesArr}
          {...gameItem}
        /> : null
})}
    </div>
  );
};

export default IndividualTab;