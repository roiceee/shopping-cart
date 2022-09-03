import * as React from "react";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/esm/Card";
import Row from "react-bootstrap/esm/Row";
function AboutPage() {
  return (
    <Container>
      <Row className="my-2">
        <h1>About</h1>
        <Card className="p-1 mx-auto" style={{width: "300px"}}>
          Hi! This is just a practice project. The data and mentioned
          &quot;brands&quot; in the project are just for display and are not
          intended for business and marketing.
        </Card>
      </Row>
    </Container>
  );
}

export default AboutPage;
