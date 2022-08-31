import * as React from "react";
import Card from "react-bootstrap/esm/Card";
import Row from "react-bootstrap/esm/Row";

interface ItemProps {
  name: string;
  src: string;
  price: number;
}

function Item({ name, src, price }: ItemProps) {
  return (
    <Card style={{ width: "18rem" }} className="p-1">
      <Card.Img variant="top" src={src} />
      <Card.Body className="d-flex align-items-end">
        <Row>
        <Card.Title>{name}</Card.Title>
        <Card.Text>₱{price}</Card.Text>
        </Row>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}

export default Item;
