import styles from "../page.module.css";

export const Posts = () => {
  return (
    <div className={styles.posts}>
      <div className={styles.info_text}>
        <p className={styles.subtitle}>Recent posts</p>
        <a className={styles.posts_link_view_all} href="#">
          View all
        </a>
      </div>
      <div className={styles.posts_cards}>
        <div className={styles.post_card}>
          <h2 className={styles.post_card_title}>
            Making a design system from scratch
          </h2>
          <div className={styles.post_card_box}>
            <p className={styles.post_card_text}>12 Feb 2020</p>
            <span>|</span>
            <p className={styles.post_card_text}>Design, Pattern</p>
          </div>
          <p className={styles.post_card_description}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
        <div className={styles.post_card}>
          <h2 className={styles.post_card_title}>
            Creating pixel perfect icons in Figma
          </h2>
          <div className={styles.post_card_box}>
            <p className={styles.post_card_text}>12 Feb 2020</p>
            <span>|</span>
            <p className={styles.post_card_text}>Figma, Icon Design</p>
          </div>
          <p className={styles.post_card_description}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
      </div>
    </div>
  );
};
