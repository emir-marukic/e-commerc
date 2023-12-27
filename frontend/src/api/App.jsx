import axios from "axios";

export const devices = axios.create({
  baseURL: "http://localhost:1337/api/devices?populate=*",
});
