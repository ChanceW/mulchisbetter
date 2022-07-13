import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { ImgCarousel } from "./img-carousel";
import classes from "./img-carousel.module.css";

export const ImgCarouselModal = ({ product, close }) => {
  return (
    <Modal isOpen={true} toggle={close} className={classes.imgModal} size="xl">
      <ModalHeader toggle={close}>{`${product.name} Mulch`}</ModalHeader>
      <ModalBody>
        <ImgCarousel imgs={product.imgs} />
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={close}>
          Purchase
        </Button>{" "}
        <Button color="secondary" onClick={close}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};
