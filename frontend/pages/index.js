import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Temp from "../public/temp.jpg";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

import TechSlider from "../components/TechSlider/TechSlider";
import FAQ from "../components/FAQ/FAQ";
import CTA from "../components/CTA/CTA";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fa1, fa2, fa3, fa4, fa5 } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <>
      <Head>
        <title>Oliver Turp | Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={`home__hero_bg ${styles.home__hero_bg}`}>
          <NavBar />
          <div className={styles.home__hero_wrap}>
            <section className={styles.home__hero_wrap_left}>
              <section className={styles.home__hero_wrap_left_text}>
                <h5 className={styles.home__hero_wrap_left_text_h5}>
                  Hi, my name is
                </h5>
                <h1 className={styles.home__hero_wrap_left_text_h1}>
                  Oliver Turp
                </h1>
                <h3 className={styles.home__hero_wrap_left_text_h3}>
                  Your Website Is My Passion!
                </h3>
                <p className={styles.home__hero_wrap_left_text_p}>
                  I’m A Web Designer & Developer With A Love For All Things
                  Frontend! I’m based in the UK but work remotely with carefully
                  selected clientele and I'm always on the look out for new
                  opportunities!
                </p>
              </section>
              <button className={`home__cta ${styles.home__cta}`}>
                <a href="#">
                  <h5>Let's Work Together!</h5>
                </a>
              </button>
            </section>
            <section className={styles.home__hero_wrap_right}>
              <Image src={Temp} alt="" priority />
            </section>
          </div>
        </div>
        <div className={styles.home__card_wrap}>
          <h2>Why Choose Me?</h2>
          <section className={styles.home__card_grid}>
            <section className={`home__card_item ${styles.home__card_item}`}>
              <h3>Free Security!</h3>
              <h4>HTTPS Included For All Sites We Host!</h4>
            </section>
            <section className={`home__card_item ${styles.home__card_item}`}>
              <h3>Collaborative Design!</h3>
              <h4>
                Your Input Is Taken At Every Milestone To Ensure Your Vision Is
                Met!
              </h4>
            </section>
            <section className={`home__card_item ${styles.home__card_item}`}>
              <h3>Green Hosting!</h3>
              <h4>I Use Servers Powered By 100% Renewable Sources!</h4>
            </section>
            <section className={`home__card_item ${styles.home__card_item}`}>
              <h3>Premium Hosting!</h3>
              <h4>My Host Partner Has A Reported 100% Uptime Rating!</h4>
            </section>
            <section className={`home__card_item ${styles.home__card_item}`}>
              <h3>Flexible Pricing!</h3>
              <h4>
                I Am Able To Adapt Any Request To Meet Your Budgetary Needs!
              </h4>
            </section>
            <section className={`home__card_item ${styles.home__card_item}`}>
              <h3>Free CMS!</h3>
              <h4>
                Client's Can Manage Their Own Content To Avoid Any Hidden Fees!
              </h4>
            </section>
          </section>
        </div>
        <TechSlider />
        <div className={`home__process_bg ${styles.home__process_bg}`}>
          <section className={styles.home__process_wrap}>
            <h2>My 5 Step Process</h2>
            <h4>
              Using the right tools with a well structured process leads to a
              collaborative success!
            </h4>
            <section className={styles.home__process_grid}>
              <section className={styles.home__process_item}>
                <div
                  className={`home__process_icon ${styles.home__process_icon}`}
                >
                  <FontAwesomeIcon icon={fa1} />
                </div>
                <h5>Research</h5>
                <p>
                  Gathering information about your company/project and its
                  goals. Researching your industry and competitors.
                </p>
              </section>
              <section className={styles.home__process_item}>
                <div
                  className={`home__process_icon ${styles.home__process_icon}`}
                >
                  <FontAwesomeIcon icon={fa2} />
                </div>
                <h5>Sketch</h5>
                <p>
                  Turning the initial research into a page by page wireframe
                  skeleton of your site.
                </p>
              </section>
              <section className={styles.home__process_item}>
                <div
                  className={`home__process_icon ${styles.home__process_icon}`}
                >
                  <FontAwesomeIcon icon={fa3} />
                </div>
                <h5>Design</h5>
                <p>
                  Wireframes are built into a fleshed out model ready for
                  development.
                </p>
              </section>
              <section className={styles.home__process_item}>
                <div
                  className={`home__process_icon ${styles.home__process_icon}`}
                >
                  <FontAwesomeIcon icon={fa4} />
                </div>
                <h5>Development</h5>
                <p>
                  The construction process is quick and easy once the design is
                  ironed out!
                </p>
              </section>
              <section className={styles.home__process_item}>
                <div
                  className={`home__process_icon ${styles.home__process_icon}`}
                >
                  <FontAwesomeIcon icon={fa5} />
                </div>
                <h5>Deploy!</h5>
                <p>Your site is now ready to go!</p>
              </section>
            </section>
          </section>
        </div>
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
