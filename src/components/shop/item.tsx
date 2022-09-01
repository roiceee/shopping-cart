import * as React from "react";
import Card from "react-bootstrap/esm/Card";
import Row from "react-bootstrap/esm/Row";
import Star from "./star"

interface ItemProps {
  name: string;
  src: string;
  price: number;
  stars: number;
}

function Item({ name, src, price, stars }: ItemProps) {
  const generateStars = React.useCallback((): JSX.Element[] => {
    const starArray: JSX.Element[] = [];

    for (let i = 0; i < stars; i++) {
      starArray.push(<Star key={i + 1}/>);
    }
    return starArray;
  }, [stars]);

  return (
    <Card style={{ width: "10rem" }} className="p-1">
      <Card.Img variant="top" src={src} />
      <Card.Body className="d-flex align-items-end p-2">
        <Row>
          <Card.Text className="my-0">{name}</Card.Text>
          <Card.Text className="my-0">₱{price}</Card.Text>
          <Card.Text>{generateStars()}</Card.Text>
        </Row>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}

export default Item;
