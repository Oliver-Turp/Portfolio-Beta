import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faSun } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import Cookies from "js-cookie";

const changeTheme = () => {
  let newTheme;
  if (document.body.classList.contains("dark")) {
    // toggle to light theme
    document.body.classList.replace("dark", "light");
    newTheme = "light";
  } else {
    // toggle to dark theme
    document.body.classList.replace("light", "dark");
    newTheme = "dark";
  }
  // set a cookie for ssr purposes
  Cookies.set("theme", newTheme);
};

export default function Footer() {
  return (
    <footer>
      <section className="footer__copyright">&copy;Oliver Turp 2023</section>
      <section className="footer__links">
        {/* LINK ME TO THE SANDBOX HOMEPAGE ONCE HOSTING IS COMPLETE */}
        <Link href="#">UI Examples</Link>
        <Link href="#">Privacy Policy</Link>
        <Link href="#">
          Terms &<br />
          Conditions
        </Link>
        <Link href="#">Link</Link>
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
        <FontAwesomeIcon icon={faSun} onClick={changeTheme} />
      </section>
    </footer>
  );
};

