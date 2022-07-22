import axios from "axios";

export const getData = () => {
  let myData;
  let myPromise = axios
    .get("https://opentdb.com/api.php?amount=10")
    .then((resp) => resp.data.results);

  return Promise.all([myPromise]).then((value) => [...value]);
};
