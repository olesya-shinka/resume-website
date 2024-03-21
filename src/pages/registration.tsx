import React, { useState } from "react";
import styles from "../styles.module.css";
import { Provider, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import Link from "next/link";
import store from "@/redux/store";
import { useRouter } from "next/router";
import {
  getAuth,
  createUserWithEmailAndPassword,
  fetchSignInMethodsForEmail,
} from "firebase/auth";
import { setUser } from "@/redux/slices/authSlice";

const Registration: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const [error, setError] = useState<string>("");

  const checkUserExists = async (email: string) => {
    const auth = getAuth();
    try {
      const signInMethods = await fetchSignInMethodsForEmail(auth, email);
      if (signInMethods.length > 0) {
        console.log("User exists");
      } else {
        console.log("User does not exist");
      }
    } catch (error) {
      setError("Такой пользователь уже зарегистрирован");
    }
  };

  const handleRegister = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Неверный формат email");
      return;
    }
    if (password.length < 6) {
      setError("Пароль должен содержать минимум 6 символов");
      return;
    }
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        router.push(`/mainpage`);
      })
      .catch((email) => checkUserExists(email));
  };

  return (
    <div className={styles.form_box}>
      <form className={styles.form}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className={styles.input}
        />
        <p className={styles.error}>{error}</p>
        <button
          type="button"
          className={styles.button}
          onClick={handleRegister}
        >
          Sign Up
        </button>
        <Link href={`/`}>
          <button type="button" className={styles.button}>
            Cancel
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Registration;
