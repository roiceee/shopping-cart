import * as React from "react";
import Button from "react-bootstrap/esm/Button";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";
import "./add-to-cart.css";
import { useContext } from "react";
import CartContext from "../../../utils/context/cart-context";

const MAXQUANTITY = 99;
interface AddToCartProps {
  itemObj: ItemObject;
}

function CartAdder({ itemObj }: AddToCartProps) {
  const { cartState, setCartState } = useContext(CartContext);
  const [currentCartItem, setCurrentCartItem] = React.useState<CartItemObject>({
    quantity: 0,
    item: itemObj,
  });

  const addToCart = React.useCallback((): void => {

    if (currentCartItem.quantity === 0) {
      return;
    }

    setCartState((prevCartState) => ({
      ...prevCartState,
      items: [...prevCartState.items, currentCartItem],
    }));
    setCurrentCartItem((currentCartItem) => ({
      ...currentCartItem,
      quantity: 0,
    }));
  }, [currentCartItem]);

  const itemQuantityHandler = React.useCallback(
    (e: React.FormEvent<HTMLInputElement>): void => {
      const value = Number(e.currentTarget.value);
      if (isNaN(value)) {
        return;
      }
      if (value > MAXQUANTITY) {
        setCurrentCartItem((prevCartItem) => ({
          ...prevCartItem,
          quantity: 99,
        }));
        return;
      }
      if (value < 0) {
        setCurrentCartItem((prevCartItem) => ({
          ...prevCartItem,
          quantity: 0,
        }));
        return;
      }
      setCurrentCartItem((prevCartItem) => ({
        ...prevCartItem,
        quantity: value,
      }));
    },
    []
  );

  const addQuantityHandler = React.useCallback((): void => {
    setCurrentCartItem((prevCartItem) => {
      if (prevCartItem.quantity + 1 > MAXQUANTITY) {
        return {
          ...prevCartItem,
          quantity: 99,
        };
      }
      return {
        ...prevCartItem,
        quantity: prevCartItem.quantity + 1,
      };
    });
  }, [currentCartItem.quantity]);

  const minusQuantityHandler = React.useCallback((): void => {
    setCurrentCartItem((prevCartItem) => {
      if (prevCartItem.quantity - 1 < 0) {
        return {
          ...prevCartItem,
          quantity: 0,
        };
      }
      return {
        ...prevCartItem,
        quantity: prevCartItem.quantity - 1,
      };
    });
  }, [currentCartItem.quantity]);

  React.useEffect(() => {
    console.log(currentCartItem);
  }, [currentCartItem]);

  React.useEffect(() => {
    console.log(cartState);
  }, [cartState]);

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
          value={currentCartItem.quantity}
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
        <Button className="rounded-pill" onClick={addToCart} disabled={currentCartItem.quantity === 0 ? true : false}>
          Add to cart
        </Button>
      </Row>
    </Container>
  );
}

export default CartAdder;
