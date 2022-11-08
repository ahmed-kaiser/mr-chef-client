import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext();

const auth = getAuth(app);

const UserAuthContext = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  };

  const signInWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  };

  const signUpWithGoogle = () => {
    return signInWithPopup(auth, googleProvider)
  };

  const logOut = () => {
    return signOut(auth)
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
        if(user) {
            setUserInfo(user);
        }else{
            setUserInfo(null);
        }
        setIsLoading(false);
    })
    return () => unSubscribe()
  }, []);

  const sharedData = {
    userInfo,
    isLoading,
    createUser,
    signInWithEmail,
    signUpWithGoogle,
    logOut
  };

  return (
    <AuthContext.Provider value={sharedData}>{children}</AuthContext.Provider>
  );
};

export default UserAuthContext;
