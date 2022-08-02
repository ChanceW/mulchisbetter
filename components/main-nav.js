import Image from "next/image";
import classes from "./main-nav.module.css";

function MainNav() {
  return (
    <div className={`${classes.nav}`}>
      <span className={classes.logo}>
        <img alt="logo" src="/img/Logo/Vector/Original.svg" />
      </span>
      <span className="d-none d-xl-block">
        <a className={classes.link} href="#">
          About
        </a>
        <a className={classes.link} href="#Products">
          Get Started
        </a>
        <a className={classes.link} href="#Expect">
          What To Expect
        </a>
      </span>
    </div>
  );
}

export default MainNav;
