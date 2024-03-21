import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { AppProps } from "next/app";
import store from "../redux/store";
import "../firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "../app/globals.css";
import firebaseConfig from "../firebase";

export const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  }, []);

  return (
    <Provider store={store}>
      <Component {...pageProps}>
      </Component>
    </Provider>
  );
};
export default MyApp;

