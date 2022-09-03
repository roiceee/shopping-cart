import * as React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import CartContext from "../../utils/context/cart-context";
import { useContext } from "react";
import CartItemCard from "./cart-item-card";
import Button from "react-bootstrap/esm/Button";

function CartPage() {
  const { cartState } = useContext(CartContext);

  const getTotal = React.useCallback((): JSX.Element => {
    if (cartState.items.length === 0) {
      return <h4>Add items to your cart!</h4>;
    }

    const total = cartState.items.reduce((acc, item) => {
      return acc + item.quantity * item.itemProperties.price;
    }, 0);

    return (
      <h4>
        Cart Total: <span style={{ color: "darkorange" }}>₱{total}</span>
      </h4>
    );
  }, [cartState]);



  return (
   
      <Container>
        <Row className="my-2">
          <h1>Cart</h1>
          <h6>
            {cartState.items.length} item{cartState.items.length < 2 ? "" : "s"}
          </h6>
          {
            cartState.items.length === 0 && 
            <div className="">Buy some items to view cart :)</div>
          }
        </Row>
        <Row className="gap-3">
          <Col md>
            <Row className="px-2 row-cols-1  d-flex flex-column" style={{height: "450px"}}>
              {cartState.items.map((item) => {
                return (
                  <CartItemCard
                    key={item.itemProperties.id}
                    item={item}
                  />
                );
              })}
            </Row>
          </Col>
          {cartState.items.length > 0 &&
            <Col md>
            <Row className="text-center">{getTotal()}</Row>
            <Row>
              <Button variant="primary" className="mx-auto" style={{width: "200px"}}>Checkout</Button>
            </Row>
          </Col>
          }
        </Row>
      </Container>
  );
}

export default CartPage;
