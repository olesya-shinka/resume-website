import Link from "next/link";
import styles from "../page.module.css";
import { useDispatch } from "react-redux";
import { removeUser } from "@/redux/slices/authSlice";
import useAuth from "../hooks/useAuth";

export const Nav = () => {
  const dispatch = useDispatch();
  const { isAuth, email } = useAuth();
  return (
    <nav className={styles.nav}>
      <a className={styles.nav_link}>Works</a>
      <a className={styles.nav_link}>Blog</a>
      <a className={styles.nav_link}>Contacts</a>
      {isAuth ? (
        <>
          <Link className={styles.nav_link} href={`/login`}>
            <p
              className={styles.nav_link}
              onClick={() => dispatch(removeUser())}
            >
              Sign Out
            </p>
          </Link>
          <p className={styles.name}>{email}</p>
        </>
      ) : (
        <Link className={styles.nav_link} href={`/login`}>
          <p className={styles.nav_link}>Sign In</p>
        </Link>
      )}
    </nav>
  );
};
