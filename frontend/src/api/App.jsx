import axios from "axios";

export const eCommercApi = axios.create({
  baseURL: "http://localhost:1337/",
});
