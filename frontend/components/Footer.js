import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faSun } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <section className="footer__copyright">&copy;Oliver Turp 2023</section>
      <section className="footer__links">
        <a href="#">UI Examples</a>
        <a href="#">Privacy Policy</a>
        <a href="#">
          Terms &<br />
          Conditions
        </a>
        <a href="#">Link</a>
      </section>
      <section className="footer__icons">
        <Link href="mailto:tcgamingbusiness@gmail.com?subject=Web%20Design%2FDev%20Enquiry!">
          <FontAwesomeIcon icon={faEnvelope} />
        </Link>
        <Link href="https://github.com/Oliver-Turp">
          <FontAwesomeIcon icon={faGithub} />
        </Link>
        <Link href="https://www.linkedin.com/in/oliverturp314/">
          <FontAwesomeIcon icon={faLinkedin} />
        </Link>
        <FontAwesomeIcon icon={faSun} />
      </section>
    </footer>
  );
};

export default Footer;
