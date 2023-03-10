import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  return (
    <nav className="nav">
      <div className="nav_logo">
        <Link href="/" />
      </div>
      <div className="nav_links">
        <a href="/">
          <h5>Home</h5>
        </a>
        <a href="/about">
          <h5>About</h5>
        </a>
        <a href="/contact">
          <h5>Contact</h5>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
