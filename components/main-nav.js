import classes from "./main-nav.module.css";

function MainNav() {
  return (
    <div className={`${classes.nav}`}>
      <span className={classes.logo}>
        <img alt="logo" src="/img/Logo/Vector/Original.svg" />
      </span>
      <span className="d-none d-md-block">
        <a className={classes.link} href="#">
          About
        </a>
        <a className={classes.link} href="#Products">
          Choose Your Color
        </a>
        <a className={classes.link} href="#">
          What To Expect
        </a>
      </span>
    </div>
  );
}

export default MainNav;
