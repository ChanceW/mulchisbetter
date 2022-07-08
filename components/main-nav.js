import classes from "./main-nav.module.css";

function MainNav() {
  return (
    <div className={classes.nav}>
      <a className={classes.link} href="#">
        About
      </a>
      <a className={classes.link} href="#Products">
        Choose Color
      </a>
      <a className={classes.link} href="#">
        What To Expect
      </a>
    </div>
  );
}

export default MainNav;
