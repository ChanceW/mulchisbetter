import classes from "./main-hero.module.css";

function MainHero(props) {
  return (
    <div className={classes.hero}>
      <video className={classes.video} autoPlay={true} muted loop>
        <source
          src="https://elasticbeanstalk-us-east-2-114778925296.s3.us-east-2.amazonaws.com/resources/MulchIsBetter.mp4"
          type="video/mp4"
        />
      </video>
      <div className={classes.caption}>
        High quality mulch products
        <br />
        delivered to your home
        <br />
        or place of business
        <br />
      </div>
    </div>
  );
}

export default MainHero;
