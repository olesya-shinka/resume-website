"use client";
import Link from "next/link";
import "./globals.css";

export function Home() {
  return (
    <div className="wrapper">
      <h1 className="title">Log in to view the page</h1>
      <Link href={`/login`}>
        <button className="btn">Sign in</button>
      </Link>
    </div>
  );
}
export default Home;
