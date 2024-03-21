"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Provider, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { setUser } from "@/redux/slices/authSlice";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import styles from "../styles.module.css";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();
  const [error, setError] = useState<string>("");

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const auth = getAuth();
    if (!auth.currentUser?.email) {
      setError("Неверный email");
      return;
    }
    if (!auth.currentUser) {
      setError("Неверный пароль");
      return;
    }
    
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        router.push(`/mainpage`);
      })
      .catch((error) => setError("Неверный email или пароль"));
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
        <button type="submit" className={styles.button} onClick={handleLogin}>
          Sign In
        </button>
        <Link href={`/registration`}>
          <button className={styles.button}>Sign Up</button>
        </Link>
        <Link href={`/`}>
          <button type="submit" className={styles.button}>
            Cancel
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
