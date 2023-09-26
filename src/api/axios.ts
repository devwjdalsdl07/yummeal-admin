import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.REATC_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
