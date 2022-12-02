import { individualGamesData } from "../../../constants/const";
import GameItemSection from "../GameItemSection/GameItemSection";

const IndividualTab = ({ handleSelectGame, selectedGamesArr }) => {
  return (
    <div className="content">
      {individualGamesData.map((gameItem) => {
        return gameItem.type === "individual" ?
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
