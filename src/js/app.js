import GameSavingLoader from "./GameSavingLoader";
import GameSaving from "./GameSaving";

GameSavingLoader.load()
  .then((saving) => new GameSaving(saving))
  .catch((error) => {
    throw new Error(error.message);
  });
