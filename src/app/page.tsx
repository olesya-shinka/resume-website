/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { Provider } from "react-redux";
import store from "@/redux/store";

export default function Home() {
  return (
    <Provider store={store}>
      <div>
        <nav className={styles.nav}>
          <a className={styles.nav_link}>Works</a>
          <a className={styles.nav_link}>Blog</a>
          <a className={styles.nav_link}>Contacts</a>
          <Link className={styles.nav_link} href={`/login`}>
            Sign In
          </Link>
        </nav>
        <div className={styles.wrapper}>
          <div className={styles.user_content}>
            <div className={styles.about_user}>
              <h1 className={styles.title}>
                Hi, I am John,
                <br />
                Creative Technologist
              </h1>
              <p className={styles.text}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <button className={styles.btn_download_resume}>
                Download Resume
              </button>
            </div>
            <div className={styles.user_photo_box}>
              <img src="photo-user.png" alt="photo" />
            </div>
          </div>
        </div>
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
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
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
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
        </div>
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
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
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
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
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
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
          <img src="Vector 13.svg" alt="line" />
        </div>
        <footer className={styles.footer}>
          <div className={styles.social}>
            <img className={styles.social_link} src="fb.svg" alt="fb" />
            <img
              className={styles.social_link}
              src="insta.svg"
              alt="instagram"
            />
            <img className={styles.social_link} src="Group.svg" alt="twitter" />
            <img
              className={styles.social_link}
              src="Linkedin.svg"
              alt="linkedin"
            />
          </div>
          <p className={styles.footer_text}>
            Copyright ©2020 All rights reserved
          </p>
        </footer>
      </div>
    </Provider>
  );
}
