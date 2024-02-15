import React, { createContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { isLoading, setIsLoading } = useState(false);
  const { userInfo, setUserInfo } = useState({});
  const login = (acct_num, password) => {
    setIsLoading(true);
    axios
      .post(
        "http://192.168.157.138:5000/auth/user/login",
        { acct_num, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        if (res.data.status === 401) {
          setErrMsg(res.data.error);
        }
        if (res.data.status == 200) {
          let userInfo = res.data;
          setUserInfo(userInfo);
          AsyncStorage.setItem("user", JSON.stringify(userInfo));
          console.log({ user: userInfo });
          setIsLoading(false);
        } else if (res.data.status === 403) {
          setErrMsg(res.data.error);
        }
      });
    //   .catch((e) => console.log(e));
  };

  return (
    <AuthContext.Provider value={{ isLoading, login, userInfo }}>
      {children}
    </AuthContext.Provider>
  );
};
