import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { ImgCarousel } from "./img-carousel";

export const ImgCarouselModal = ({ product, close }) => {
  return (
    <Modal isOpen={true} toggle={close}>
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
