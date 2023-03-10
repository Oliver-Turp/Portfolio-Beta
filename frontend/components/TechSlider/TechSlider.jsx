import HTML from "../../public/HTML5.png";
import CSS from "../../public/CSS3.png";
import JS from "../../public/JS.png";
import REACT from "../../public/React.png";
import NEXT from "../../public/nextjs.png";
import GIT from "../../public/Git.png";
import MYSQL from "../../public/MySQL.png";
import MONGO from "../../public/MongoDB.png";
import CPANEL from "../../public/cPanel.png";
import Image from "next/image";

import styles from "./TechSlider.module.css";

const Test = () => {
  return (
    <div className={`tech_slider_bg ${styles.tech_slider_bg}`}>
      <h3>Technologies I've Worked With</h3>
      <section className={styles.tech_slider_container}>
        <section className={styles.tech_slider}>
          <Image src={HTML} />
          <Image src={CSS} />
          <Image src={JS} />
          <Image src={REACT} />
          <Image src={NEXT} />
          <Image src={GIT} />
          <Image src={MYSQL} />
          <Image src={MONGO} />
          <Image src={CPANEL} />
          <Image src={HTML} />
          <Image src={CSS} />
          <Image src={JS} />
          <Image src={REACT} />
          <Image src={NEXT} />
          <Image src={GIT} />
          <Image src={MYSQL} />
          <Image src={MONGO} />
          <Image src={CPANEL} />
        </section>
      </section>
    </div>
  );
};

export default Test;
