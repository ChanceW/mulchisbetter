import classes from "./officeLayout.module.css";

export const OfficeLayout = (props) => {
  return (
    <>
      <div className={classes.sideNav}>
        <a href="/" className={classes.logoLink}>
          <img alt="logo" src="/img/Logo/Vector/Original.svg" />
        </a>
        <a href="#orders">Orders</a>
        <a href="#clients">Clients</a>
        <a href="#products">Products</a>
      </div>
      <div className={classes.main}>{props.children}</div>
    </>
  );
};
