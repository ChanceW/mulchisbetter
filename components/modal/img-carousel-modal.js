import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { ImgCarousel } from "./img-carousel";
import classes from "./img-carousel.module.css";

export const ImgCarouselModal = ({ product, close }) => {
  return (
    <Modal isOpen={true} toggle={close} className={classes.imgModal} size="lg">
      <ModalHeader toggle={close}>{`${product.name} Mulch`}</ModalHeader>
      <ModalBody>
        <ImgCarousel imgs={product.imgs} />
      </ModalBody>
      <ModalFooter>
        <Button onClick={close} className={classes.modalBtn}>
          Purchase
        </Button>{" "}
        <Button onClick={close} className={classes.modalBtn}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};
