import { UncontrolledCarousel } from "reactstrap";
import classes from "./img-carousel.module.css";

export const ImgCarousel = ({ imgs }) => {
  const items = imgs.map((item, idx) => {
    return {
      src: item,
      altText: `Slide ${idx + 1}`,
      caption: `Slide ${idx + 1}`,
      header: `Slide ${idx + 1} Header`,
    };
  });

  return (
    <div className={classes.carousel}>
      <UncontrolledCarousel items={items} />
    </div>
  );
};
