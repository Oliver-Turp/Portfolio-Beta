import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/About.module.css";
import Temp from "../public/temp.jpg";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import TechSlider from "../components/TechSlider/TechSlider";
import CTA from "../components/CTA/CTA";

const About = () => {
  return (
    <>
      <Head>
        <title>Oliver Turp | About</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main>
        <div className={styles.about_hero_wrap}>
          <div className={styles.about_hero_main}>
            <section className={`about_hero_text ${styles.about_hero_text}`}>
              <h1>
                Hello! <br />
                I'm Oliver Turp
              </h1>
              <h3>
                A freelance Web Designer and Developer based out of London,
                England.
              </h3>
              <h5>
                My interest in web design and development really started in
                2019, when my classmate begged me to mimic an authentic
                university bulletin to fool her parents, so she could spend more
                time with her boyfriend. I enjoyed the creative process so much
                that I became driven to learn more.
                <br />
                <br />
                The 2020 pandemic really aided this as I was able to defer my
                degree for 2 years and focus more time to my new passion of
                static website design.
                <br />
                <br />
                Fast forward to today, and I moved past static websites and onto
                React JS, the JavaScript library used for this project, where
                I’m looking to freelance in full time someday!
              </h5>
            </section>
            <section className={styles.about_hero_img}>
              <Image src={Temp} />
            </section>
          </div>
          <section className={styles.about_hero_cta}>
            <Link
              className={`about_hero_cta_btn primary ${styles.about_hero_cta_btn}`}
              href="#"
            >
              Download My CV
            </Link>
            <Link
              className={`about_hero_cta_btn secondary ${styles.about_hero_cta_btn}`}
              href="#"
            >
              Download My Degree
            </Link>
          </section>
        </div>
        <TechSlider />
        <div className={styles.about_skills_wrap}>
          <section className={`about_skills_card ${styles.about_skills_card}`}>
            <h3>Transferable Skills</h3>
            <section className={styles.about_skills_card_grid}>
              <section className={styles.about_skills_card_grid_item}>
                <p>Project Management</p>
                <p>
                  I’ve been successfully running my own projects and teams since
                  2018. My projects meet targets, run on time and stay under
                  budget.
                </p>
              </section>
              <section className={styles.about_skills_card_grid_item}>
                <p>Good Communicator</p>
                <p>
                  Having worked every role in the hierarchy of a team, and had
                  many customer facing jobs, I am well versed to communicate
                  well with any client.
                </p>
              </section>
              <section className={styles.about_skills_card_grid_item}>
                <p>Natural Problem Solver</p>
                <p>
                  My engineering background has wired my brain to seek out and
                  resolve problems often before they arise.
                </p>
              </section>
              <section className={styles.about_skills_card_grid_item}>
                <p>Back Office Proficiency</p>
                <p>
                  I am well versed in running book-keeping, project management,
                  and all other back office tasks to keep a project running
                  smoothly.
                </p>
              </section>
              <section className={styles.about_skills_card_grid_item}>
                <p>Good Communicator</p>
                <p>
                  Having worked every role in the hierarchy of a team, and had
                  many customer facing jobs, I am well versed to communicate
                  well with any client.
                </p>
              </section>
            </section>
          </section>
          <section className={`about_skills_card ${styles.about_skills_card}`}>
            <h3>Technical Skills</h3>
            <section className={styles.about_skills_card_grid}>
              <section className={styles.about_skills_card_grid_item}>
                <p>Operating Systems</p>
                <p>Windows 7, 8, 10 and 11 (even Vista)!</p>
              </section>
              <section className={styles.about_skills_card_grid_item}>
                <p>Software</p>
                <p>Office 365 as well as Google Workspace.</p>
              </section>
              <section className={styles.about_skills_card_grid_item}>
                <p>Video Conferencing</p>
                <p>Zoom, MS Teams, Skype and Discord.</p>
              </section>
              <section className={styles.about_skills_card_grid_item}>
                <p>Frontend</p>
                <p>HTML, CSS, JS, React, Next.</p>
              </section>
              <section className={styles.about_skills_card_grid_item}>
                <p>Backend</p>
                <p>NodeJS, Express</p>
              </section>
              <section className={styles.about_skills_card_grid_item}>
                <p>Databases</p>
                <p>SQL, NoSQL (MongoDB).</p>
              </section>
              <section className={styles.about_skills_card_grid_item}>
                <p>Repositories</p>
                <p>Git, GitHub.</p>
              </section>
            </section>
          </section>
        </div>
        <CTA />
      </main>
      <Footer />
    </>
  );
};

export default About;
