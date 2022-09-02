import * as React from "react";
import Row from "react-bootstrap/esm/Row";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/esm/Col"

function HomeRow({ image, title, buttonLinkToPath, description }: HomeRowProps) {
  return (
    <Row className="mb-5 text-center mx-auto">
        <Col md={10} className="mx-auto">
        <img
          src={image}
          className="mb-3 img-fluid rounded-2"
          style={{maxHeight: "350px"}}
        />
        </Col>
        <h2 >{title}</h2>
        <p>{description}</p>
        <Link to={`/${buttonLinkToPath}`}>
          <Button variant="primary" className="py-2 px-5 rounded-pill">
            Buy {title}
          </Button>
        </Link>
    </Row>
  );
}

export default HomeRow;
