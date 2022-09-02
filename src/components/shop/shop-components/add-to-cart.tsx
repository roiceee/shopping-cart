import * as React from "react";
import Button from "react-bootstrap/esm/Button";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";
import "./add-to-cart.css";

const MAXQUANTITY = 99;

function AddToCart() {
  const [itemQuantity, setItemQuantity] = React.useState<number>(0);

  const itemQuantityHandler = React.useCallback(
    (e: React.FormEvent<HTMLInputElement>): void => {
      const value = Number(e.currentTarget.value);
      if (isNaN(value)) {
        return;
      }
      if (value > MAXQUANTITY) {
        setItemQuantity(MAXQUANTITY);
        return;
      }
      if (value < 0) {
        setItemQuantity(0);
        return;
      }
      setItemQuantity(value);
    },
    []
  );

  const addQuantityHandler = React.useCallback((): void => {
    setItemQuantity((prevItemQuantity) => {
      if (prevItemQuantity + 1 > MAXQUANTITY) {
        return 99;
      }
      return prevItemQuantity + 1;
    });
  }, [itemQuantity]);

  const minusQuantityHandler = React.useCallback((): void => {
    setItemQuantity((prevItemQuantity) => {
      if (prevItemQuantity - 1 < 0) {
        return 0;
      }
      return prevItemQuantity - 1;
    });
  }, [itemQuantity]);

  return (
    <Container>
      <Row className="row-cols-auto gap-1 my-2 mx-1">
        <Button
          onClick={minusQuantityHandler}
          variant="fourth"
          className="d-flex justify-content-center align-items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </Button>
        <input
          value={itemQuantity}
          onChange={itemQuantityHandler}
          className="item-quantity text-center my-auto"
        />
        <Button
          onClick={addQuantityHandler}
          variant="fourth"
          className="d-flex justify-content-center align-items-center"
        >
          <svg
            className="my-auto"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </Button>
      </Row>
      <Row>
        <Button className="rounded-pill">Add to cart</Button>
      </Row>
    </Container>
  );
}

export default AddToCart;
