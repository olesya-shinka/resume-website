"use client";
import React, { useState } from "react";
import styles from "../styles.module.css";
import Link from "next/link";

interface RegistrationFormProps {
  onSubmit: (email: string, password: string) => void;
}

// const register = async (username: string, password: string): Promise<void> => {
//   try {
//     const response = await fetch("/register", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ username, password }),
//     });

//     if (!response.ok) {
//       throw new Error("Failed to register");
//     }

//     console.log("User registered successfully");
//   } catch (error) {
//     console.error("Error registering:", error.message);
//   }
// };

const Registration: React.FC<RegistrationFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
            Sign Up
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Registration;
