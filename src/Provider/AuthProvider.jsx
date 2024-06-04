import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config.js";
import PropTypes from "prop-types";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import useAxiosPublic from "../Hooks/UseAxiosPublic";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);
  const axiosPublic = useAxiosPublic();
  const googleProvider = new GoogleAuthProvider();

  // create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login user
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // update profile
  const updateUserProfile = (name, photo) => {
    const auth = getAuth();
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // logOut user
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Google sign in
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        // get token and store client
        const userInfo = { email: currentUser.email };
        axiosPublic.post("/jwt", userInfo).then((res) => {
          console.log("inside jwt");
          if (res.data.token) {
            console.log("set token to LS");
            localStorage.setItem("access-token", res.data.token);
            setLoading(false);
          }
        });
      } else {
        // remove token (if token is stored in the client side)
        console.log("remove token from LS");
        localStorage.removeItem("access-token");
        setLoading(false);
      }
      console.log("current user", currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, [axiosPublic, auth]);

  // useEffect(() => {
  //   const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     setUser(currentUser);
  //     setLoading(false);

  //     console.log(
  //       "observing current user inside useEffect of AuthProvider",
  //       currentUser
  //     );
  //   });

  //   return () => {
  //     unSubscribe();
  //   };
  // }, []);

  const authInfo = {
    user,
    loading,
    login,
    createUser,
    updateUserProfile,
    logOut,
    signInWithGoogle,
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
