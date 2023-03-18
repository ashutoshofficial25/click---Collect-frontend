import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import {
  getAccount,
  getToken,
  setSession,
  verifyToken,
} from "../../services/auth.service";
import { userLogin } from "../../feature/userSlice";

const Auth = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const router = useRouter();

  const init = async () => {
    const token = await getToken();

    if (!token || !(await verifyToken(token))) {
      console.log("log: logging out invalid token");
      if (typeof window !== "undefined") {
        localStorage.removeItem("account");
        localStorage.removeItem("token");
      }
      setLoading(false);
      router.push("/");
    }

    const account = getAccount();
    if (!account) {
    }

    await setSession(token, account);
    dispatch(userLogin(account));
    setLoading(false);
  };

  useEffect(() => {
    init();
  }, []);

  return <>{loading ? <h1>Loading</h1> : children}</>;
};

export default Auth;
