import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Contact.module.css";
import Temp from "../public/temp.jpg";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Head>
        <title>Oliver Turp | Contact</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.contact_page}>
        <NavBar />
        <main className={styles.contact_content}>
          <section className={styles.contact_text_wrap}>
            <h1>Contact Me</h1>
            <section>
              <h3>Looking to create your dream website?...</h3>
              <h3>head hunting for your next project?...</h3>
              <h3>please feel free to get in touch!</h3>
              <p>I am to reply to everyone within 3 business days.</p>
            </section>
            <button className={styles.contact__cta}>
              <a href="#">
                <h5>Let's Start Something Special!</h5>
              </a>
            </button>
          </section>
          <section className={styles.contact_form_wrap}>
            <section className={styles.contact_form_bar}>
              <section
                className={[
                  styles.contact_form_bar_section,
                  styles.left,
                  styles.complete,
                ].join(" ")}
              ></section>
              <section
                className={[
                  styles.contact_form_bar_section,
                  styles.active,
                ].join(" ")}
              ></section>
              <section className={styles.contact_form_bar_section}></section>
              <section className={styles.contact_form_bar_section}></section>
              <section className={styles.contact_form_bar_section}></section>
              <section className={styles.contact_form_bar_section}></section>
              <section className={styles.contact_form_bar_section}></section>
              <section
                className={[styles.contact_form_bar_section, styles.right].join(
                  " "
                )}
              ></section>
            </section>
            <section className={styles.contact_form}>
              <h2>Put Me Here Victor</h2>
              <section>
                <a href="#">Option 1</a>
                <a href="#">Option 2</a>
              </section>
            </section>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default About;
