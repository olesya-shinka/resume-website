/* eslint-disable @next/next/no-img-element */
import styles from "../page.module.css";

export const InfoCandidate = () => {
  return (
    <div className={styles.user_content}>
      <div className={styles.about_user}>
        <h1 className={styles.title}>
          Hi, I am John,
          <br />
          Creative Technologist
        </h1>
        <p className={styles.text}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          <br />
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam <br />
          consequat sunt nostrud amet.
        </p>
        <button className={styles.btn_download_resume}>Download Resume</button>
      </div>
      <div className={styles.user_photo_box}>
        <img className={styles.photo} src="photo-user.png" alt="photo" />
      </div>
    </div>
  );
};

