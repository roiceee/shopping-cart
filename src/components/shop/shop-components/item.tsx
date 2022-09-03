import * as React from "react";
import Card from "react-bootstrap/esm/Card";
import Row from "react-bootstrap/esm/Row";
import "./item.css";
import { generateStars } from "../../../utils/shop-utils/item-utils";

interface ItemProps {
  itemObj: ItemObject;
  setModalShow: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentItem: React.Dispatch<React.SetStateAction<ItemObject>>;
}

function ItemCard({ itemObj, setModalShow, setCurrentItem }: ItemProps) {
  const handleItemCardClick = React.useCallback((): void => {
    setCurrentItem(itemObj);
    setModalShow(true);
  }, [itemObj]);

  return (
    
      <Card
        style={{ width: "10rem" }}
        className="p-1 hover-card"
        onClick={handleItemCardClick}
      >
        <Card.Img variant="top" src={itemObj.src} />
        <Card.Body className="d-flex align-items-end p-2">
          <Row>
            <Card.Text className="my-0">{itemObj.name}</Card.Text>
            <Card.Text
              className="my-0"
              style={{ color: "darkorange", fontSize: "1.05rem" }}
            >
              ₱{itemObj.price}
            </Card.Text>
            <Card.Text>{generateStars(itemObj.stars)}</Card.Text>
          </Row>
        </Card.Body>
      </Card>
  );
}

export default ItemCard;
