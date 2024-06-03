import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useAuthHook = () => {
  const auth = useContext(AuthContext);
  return auth;
};

export default useAuthHook;
