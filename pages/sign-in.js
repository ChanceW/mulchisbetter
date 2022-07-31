import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import classes from "./sign-in.module.css";
import buttonClasses from "../components/button.module.css";
import Image from "next/image";

export default function SignIn() {
  return (
    <div className={classes.main}>
      <Form className={classes.form}>
        <div className={classes.imgDiv}>
          <Image
            src="/img/Logo/Vector/Original.svg"
            alt="Picture of the author"
            layout="fixed"
            width={300}
            height={45}
          />
        </div>
        <FormGroup>
          <Label for="email">Email: </Label>
          <Input id="email" name="email" type="email" />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password </Label>
          <Input id="password" names="password" type="password" />
        </FormGroup>
        <Button className={buttonClasses.button}>Sign In</Button>
      </Form>
    </div>
  );
}
