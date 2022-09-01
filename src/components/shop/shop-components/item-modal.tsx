import * as React from "react";
import Modal from "react-bootstrap/esm/Modal";
import { generateStars } from "../../../utils/shopUtils/item-utils";
import Row from "react-bootstrap/esm/Row";

interface ItemModalProps {
  modalShow: boolean;
  itemObj: ItemObject;
  setModalShow: (a: boolean) => void;
}

function ItemModal({ modalShow, itemObj, setModalShow }: ItemModalProps) {
  return (
    <Modal
      show={modalShow}
      onHide={() => setModalShow(false)}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {itemObj.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={itemObj?.src} alt={itemObj.name} className="img-fluid" />
        <Row className="mt-2">
          <div style={{ color: "darkorange", fontSize: "1.05rem" }}>
            ₱{itemObj.price}
          </div>
          <div className="d-flex gap-1 m-1">{generateStars(itemObj.stars)}</div>
        </Row>
      </Modal.Body>
    </Modal>
  );
}

export default ItemModal;
