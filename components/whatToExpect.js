import classes from "./whatToExpect.module.css";

const lorIps =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

export const WhatToExpect = (props) => {
  return (
    <div id="Expect" className={classes.expect}>
      <div className={classes.title}>What To Expect</div>
      <div className="row">
        <div className="col">{lorIps}</div>
        <div className="col">{lorIps}</div>
      </div>
    </div>
  );
};
