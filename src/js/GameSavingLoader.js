import read from "./reader";
import json from "./parser";

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve, reject) => {
      read()
        .then((data) => json(data))
        .then((response) => resolve(JSON.parse(response)))
        .catch((err) => reject(err))
        .then((result) => resolve(result));
    });
  }
}
