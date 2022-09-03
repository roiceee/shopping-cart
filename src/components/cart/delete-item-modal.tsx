import * as React from "react";
import Modal from "react-bootstrap/esm/Modal";
import Button from "react-bootstrap/esm/Button";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import CartContext from "../../utils/context/cart-context";
import { useContext } from "react";

interface DeleteItemModalProps {
  item: CartItemObject;
  show: boolean;
  setModalShow: React.Dispatch<React.SetStateAction<boolean>>;
}

function DeleteItemModal({ item, show, setModalShow }: DeleteItemModalProps) {
  const closeModalButtonHandler = (): void => {
    setModalShow(false);
  };

  const { cartState, setCartState } = useContext(CartContext);

  const deleteCartItem = React.useCallback((): void => {
    setCartState((prevCartState) => {
      const updatedItems = prevCartState.items.filter((cartItem) => {
        return cartItem.itemProperties.id !== item.itemProperties.id;
      });

      return {
        ...prevCartState,
        items: updatedItems,
      };
    });
  }, [cartState]);

  return (
    <Modal
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      show={show}
      onHide={closeModalButtonHandler}
      centered
    >
      <Modal.Header closeButton>
        <h5 id="contained-modal-title-vcenter">Delete Item</h5>
      </Modal.Header>
      <Row className="p-3">
        <Row>
          <p>This would remove the item from the cart.</p>
        </Row>
        <Col className="d-flex justify-content-around">
          <Button variant="secondary" onClick={deleteCartItem}>Delete</Button>
          <Button variant="primary" onClick={closeModalButtonHandler}>
            Cancel
          </Button>
        </Col>
      </Row>
    </Modal>
  );
}

export default DeleteItemModal;
