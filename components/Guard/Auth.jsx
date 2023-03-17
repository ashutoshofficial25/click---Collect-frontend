import React from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

const Auth = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const router = useRouter();

  const init = async () => {};

  useEffect(() => {
    init();
  }, []);

  return <>{loading ? <h1>Loading</h1> : children}</>;
};

export default Auth;
