/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState } from "react";
import styles from "../styles.module.css";
import Link from "next/link";
import authSlice from "@/redux/slices/authSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

interface LoginFormProps {
  onSubmit: (email: string, password: string) => void;
}

// const login = async (username: string, password: string): Promise<void> => {
//   try {
//     const response = await fetch("/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ username, password }),
//     });

//     if (!response.ok) {
//       throw new Error("Failed to log in");
//     }

//     console.log("User logged in successfully");
//   } catch (error) {
//     console.error("Error logging in:", error.message);
//   }
// };

const Login: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email, password);
  };

  return (
    <div className={styles.form_box}>
      <form className={styles.form} onSubmit={handleSubmit}>
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
        <Link href={`/`}>
          <button type="submit" className={styles.button}>
            Sign In
          </button>
        </Link>
        <Link href={`/registration`}>
          <button className={styles.button}>Sign Up</button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
