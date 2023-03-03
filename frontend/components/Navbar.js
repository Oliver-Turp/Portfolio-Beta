import Link from "next/link";
import Image from "next/image";
import Logo_LM from "../public/logo_lm.png";

const NavBar = () => {
  return (
    <nav>
      <div className="nav-logo">
        <Image src={Logo_LM} alt="logo" />
      </div>
      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
};

export default NavBar;
