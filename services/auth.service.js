import jwtDecode from "jwt-decode";
import { Axios } from "../configs";

let token = "";
if (typeof window !== "undefined") token = localStorage.getItem("token");
export const getToken = () => token;

let account;
if (typeof window !== "undefined")
  account = JSON.parse(localStorage.getItem("account"));
export const getAccount = () => account;

export const setToken = async (token) => {
  JSON.stringify(localStorage.setItem("token", token));
};

export const setSession = async (token, account) => {
  if (token) {
    localStorage.setItem("token", JSON.stringify(token));
    localStorage.setItem("account", JSON.stringify(account));
    //set axios intersepter
    Axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    Axios.defaults.headers.post["Content-Type"] = "application/json";
    //  Axios.defaults.withCredentials = true;
  } else {
    localStorage.removeItem("token");
    localStorage.removeItem("account");
  }
};

export const verifyToken = async (token) => {
  if (!token) {
    return false;
  }
  const decode = await jwtDecode(token);
  const currentTime = Date.now() / 1000;
  return decode.exp > currentTime;
};

export const isAuthenticated = () => !!getToken();
