import axios from "axios";
let token = "";
if (typeof window !== "undefined") {
  token = localStorage.getItem("token");
}

export const Axios = axios.create({
  headers: `Bearer ${token}`,
});
