import { Axios } from "../configs";
import { constants } from "../constants/constants";

export const loginuser = async (payload) => {
  try {
    const result = await Axios.post(
      `${constants.BASE_URL}/auth/login`,
      payload
    );
    return result.data;
  } catch (error) {
    return error.response.data;
  }
};

export const createUser = async (payload) => {
  try {
    const result = await Axios.post(
      `${constants.BASE_URL}/auth/signup`,
      payload
    );
    return result.data;
  } catch (error) {
    return error.response.data;
  }
};

export const logoutUser = async () => {
  // const result = await Axios.get(`${constants.BASE_URL}/auth/logout`);

  if (typeof window !== "undefined") {
    localStorage.removeItem("token");
    localStorage.removeItem("account");
  }
  // return result.data;
};
