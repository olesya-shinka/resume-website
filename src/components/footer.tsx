/* eslint-disable @next/next/no-img-element */
import styles from "../page.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.social}>
        <img className={styles.social_link} src="fb.svg" alt="fb" />
        <img className={styles.social_link} src="insta.svg" alt="instagram" />
        <img className={styles.social_link} src="Group.svg" alt="twitter" />
        <img className={styles.social_link} src="Linkedin.svg" alt="linkedin" />
      </div>
      <p className={styles.footer_text}>Copyright ©2020 All rights reserved</p>
    </footer>
  );
};
