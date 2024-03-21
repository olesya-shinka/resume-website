/* eslint-disable @next/next/no-img-element */
import styles from "../page.module.css";

export const FeaturedWorks = () => {
  return (
    <div className={styles.featured_works}>
      <h2 className={styles.featured_works_title}>Featured works</h2>
      <div className={styles.featured_works_item}>
        <img src="Rectangle 30.png" alt="img" />
        <div className={styles.featured_works_item_box}>
          <h2 className={styles.featured_works_item_title}>
            Designing Dashboards
          </h2>
          <div className={styles.featured_works_item_div}>
            <span className={styles.featured_works_item_year}>2020</span>
            <p className={styles.featured_works_item_subtitle}>Dashboard</p>
          </div>
          <p className={styles.featured_works_item_text}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
      </div>
      <div className={styles.featured_works_item}>
        <img src="Rectangle 32.jpg" alt="img" />
        <div className={styles.featured_works_item_box}>
          <h2 className={styles.featured_works_item_title}>
            Designing Dashboards
          </h2>
          <div className={styles.featured_works_item_div}>
            <span className={styles.featured_works_item_year}>2020</span>
            <p className={styles.featured_works_item_subtitle}>Dashboard</p>
          </div>
          <p className={styles.featured_works_item_text}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
      </div>
      <div className={styles.featured_works_item}>
        <img src="Rectangle 34.png" alt="img" />
        <div className={styles.featured_works_item_box}>
          <h2 className={styles.featured_works_item_title}>
            Designing Dashboards
          </h2>
          <div className={styles.featured_works_item_div}>
            <span className={styles.featured_works_item_year}>2020</span>
            <p className={styles.featured_works_item_subtitle}>Dashboard</p>
          </div>
          <p className={styles.featured_works_item_text}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
      </div>
      <img src="Vector 13.svg" alt="line" />
    </div>
  );
};


