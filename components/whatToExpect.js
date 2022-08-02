import classes from "./whatToExpect.module.css";
import { Receipt, Telephone, Truck, Camera } from "react-bootstrap-icons";

const expectations = [
  {
    text: "Order confirmation email/text- Once you have placed your order, we will reach out to you within 24 hours to schedule your order delivery. Normal deliver time is within 2-3 days of placing your order. ",
    img: <Receipt />,
  },
  {
    text: "Follow up email/text day of delivery- We will email to confirm order delivery.",
    img: <Telephone />,
  },
  {
    text: "Mulch will be delivered to the area that you selected. There are some limiting factors. The more information that you can provide, the better we can accommodate your request.",
    img: <Truck />,
  },
  {
    text: "Follow up email/text after delivery- We will let you know the product is delivered with a photo confirmation.",
    img: <Camera />,
  },
];

export const WhatToExpect = (props) => {
  return (
    <div id="Expect" className={classes.expect}>
      <div className={classes.title}>What To Expect</div>
      {expectations.map((ex, idx) => {
        return (
          <div className={`row ${classes.expectRow}`} key={idx}>
            <div className={`col ${idx % 2 !== 0 ? "order-last" : ""}`}>
              {ex.text}
            </div>
            <div className={`col ${classes.imgCol}`}>{ex.img}</div>
          </div>
        );
      })}
    </div>
  );
};
