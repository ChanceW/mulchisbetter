import classes from "./officeLayout.module.css";

export const OfficeLayout = (props) => {
  return (
    <>
      <div className={classes.sideNav}>
        <a href="#orders">Orders</a>
        <a href="#clients">Clients</a>
        <a href="#products">Products</a>
      </div>
      <div className={classes.main}>{props.children}</div>
    </>
  );
};
