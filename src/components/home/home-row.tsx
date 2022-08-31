import * as React from 'react';
import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"
import Button from "react-bootstrap/esm/Button"

interface HomeRowProps {
    image: string;
    title: string;
    description: string;
}


function HomeRow({image, title, description}:HomeRowProps) {
    return ( 
        <Row id="home-shop-fish" className='mb-5'>
        <Col md className="text-center">
          <img src={image} className="img-fluid col-10 col-sm-auto border-1 border-white"/>
        </Col>
        <Col md className="text-center mt-3">
          <h2>{title}</h2>
          <p>
            {description}
          </p>
          <Button variant="primary" className="py-2 px-4 fw-bolder">
            Visit Shop
          </Button>
        </Col>
      </Row>
     );
}

export default HomeRow;