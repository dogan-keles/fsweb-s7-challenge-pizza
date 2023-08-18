import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "reactstrap";

function Footer() {
  return (
    <div>
      <Container>
        <Row className="footer-row">
          <Col className="footer-columns">
            <img src="./Assets/adv-aseets/icons/1.svg" alt="" />
          </Col>
          <Col className="footer-columns" xs={6}>
            2 of 3 (wider)
          </Col>
          <Col className="footer-columns">3 of 3</Col>
        </Row>
      </Container>
    </div>
  );
}
export default Footer;
