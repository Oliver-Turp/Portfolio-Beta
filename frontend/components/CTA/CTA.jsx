import Link from "next/link";
import styles from "./cta.module.css";

const CTA = () => {
  return (
    <div className={styles.cta_wrap}>
      <section className={styles.cta_txt}>
        <h2>Let's Start Something Special!</h2>
        <h5>
          By setting aside as little as 15 minutes, we can discuss turning your
          ideas into reality.
        </h5>
      </section>
      <Link href="#" className={styles.cta_btn}>
        <h3>Book Your Free Consultation</h3>
      </Link>
    </div>
  );
};

export default CTA;
