import Image from "next/image";
import classes from "./main-nav.module.css";

function MainNav() {
  return (
    <div className={`${classes.nav}`}>
      <span className={classes.logo}>
        <Image alt="logo" src="/img/logo.png" width={200} height={30} />
      </span>
      <span className="d-none d-md-block">
        <a className={classes.link} href="#">
          About
        </a>
        <a className={classes.link} href="#Products">
          Choose Color
        </a>
        <a className={classes.link} href="#">
          What To Expect
        </a>
      </span>
    </div>
  );
}

export default MainNav;
