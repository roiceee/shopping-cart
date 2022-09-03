import * as React from "react";
import Card from "react-bootstrap/esm/Card";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import "./cart-item-card.css";
import deleteIcon from "../../assets/images/trash.svg";
import DeleteItemModal from "./delete-item-modal";

interface CartItemCardProps {
  item: CartItemObject;
}

function CartItemCard({ item }: CartItemCardProps) {
  const [modalShow, setModalShow] = React.useState(false);

  const deleteItemButtonHandler = () => {
    setModalShow(true);
  };

  return (
    <>
        <Card style={{ maxWidth: "400px", height: "fit-content"}} className="p-1 mx-auto mb-2">
          <Row>
            <Col className="col-4">
              <div className="rounded-1">
                <img
                  src={item.itemProperties.src}
                  className="img-fluid rounded-1"
                />
              </div>
            </Col>
            <Col>
              <Row className="mb-1">
                <div style={{ fontSize: "1.2rem" }}>
                  {item.itemProperties.name}
                </div>
              </Row>
              <Row>
                <Col>
                  <div style={{ color: "darkorange" }}>
                    ₱{item.itemProperties.price}
                  </div>
                </Col>
                <Col>
                  <div>Qty: {item.quantity}</div>
                </Col>
              </Row>
              <Row>
                <div>
                  Total:{" "}
                  <span style={{ color: "darkorange", fontSize: "1.1rem" }}>
                    ₱{item.quantity * item.itemProperties.price}
                  </span>
                </div>
              </Row>
            </Col>
            <Col className="col-2 text-end">
              <img
                src={deleteIcon}
                alt="delete icon"
                className="hover-delete"
                onClick={deleteItemButtonHandler}
              />
            </Col>
          </Row>
        </Card>
      <DeleteItemModal
        item={item}
        show={modalShow}
        setModalShow={setModalShow}
      />
    </>
  );
}

export default CartItemCard;
