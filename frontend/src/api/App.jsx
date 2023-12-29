import axios from "axios";

export const devicesApi = axios.create({
  baseURL: "http://localhost:1337/",
});
