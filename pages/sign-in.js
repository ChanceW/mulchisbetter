import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import classes from "./sign-in.module.css";
import buttonClasses from "../components/common/button.module.css";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/dist/client/router";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async () => {
    setLoading(true);
    const result = await signIn("credentials", {
      redirect: false,
      email: email,
      password: password,
    });

    if (result.ok) {
      router.replace("/office");
    }
  };

  let spinnerClasses = [classes.spinnerDiv];
  if (isLoading) {
    spinnerClasses.push(classes.loading);
  }
  return (
    <div className={classes.main}>
      <Form className={classes.form}>
        <div className={classes.imgDiv}>
          <Image
            src="/img/Logo/Vector/Original.svg"
            alt="Picture of the author"
            layout="fixed"
            width={300}
            height={50}
          />
        </div>
        <FormGroup>
          <Label for="email">Email: </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password: </Label>
          <Input
            id="password"
            names="password"
            type="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </FormGroup>
        <div className={spinnerClasses.join(" ")}>
          {Array(3)
            .fill(null)
            .map((i, idx) => {
              return (
                <div
                  key={idx}
                  className={
                    classes.spinner + " spinner-border spinner-border-sm"
                  }
                  role="status"
                ></div>
              );
            })}
        </div>
        <Button className={buttonClasses.button} onClick={onSubmit}>
          Sign In
        </Button>
      </Form>
    </div>
  );
}
