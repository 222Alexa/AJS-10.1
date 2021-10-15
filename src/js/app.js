import GameSavingLoader from "./GameSavingLoader";

GameSavingLoader.load()
  .then((saving) => resolve(new GameSaving(saving)))
  .catch((error) => {
    throw new Error(error.message);
  });
