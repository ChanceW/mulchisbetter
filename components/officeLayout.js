import classes from "./officeLayout.module.css";
import buttonClasses from "../components/button.module.css";
import { Button } from "reactstrap";
import { BoxArrowLeft } from "react-bootstrap-icons";
import { useRouter } from "next/dist/client/router";
import { signOut } from "next-auth/react";

export const OfficeLayout = (props) => {
  const router = useRouter();
  return (
    <>
      <div className={classes.sideNav}>
        <a href="#" className={classes.logoLink}>
          <img alt="logo" src="/img/Logo/Vector/Original.svg" />
        </a>
        <a href="#orders">Orders</a>
        <a href="#clients">Clients</a>
        <a href="#products">Products</a>
        <Button
          className={buttonClasses.button}
          onClick={async (event) => {
            event.preventDefault();
            const resp = await signOut({
              redirect: true,
              callbackUrl: "/sign-in",
            });
          }}
        >
          <BoxArrowLeft />
        </Button>
      </div>
      <div className={classes.main}>{props.children}</div>
    </>
  );
};
