import axios from "axios";

export const getSamsungData = axios.create({
  baseURL: "http://localhost:1337/api/samsungs",
});

export const getSamsungWatchData = axios.create({
  baseURL: "http://localhost:1337/api/samsung-smart-watches",
});
export const getIphoneData = axios.create({
  baseURL: "http://localhost:1337/api/phones",
});
export const getIphoneWatchData = axios.create({
  baseURL: "http://localhost:1337/api/iphone-watches",
});
