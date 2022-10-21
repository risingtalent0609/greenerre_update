import React from "react";
import { Row, Col } from "react-bootstrap";

import EcosystemItem from "../EcosystemItem/EcosystemItem";
const Ecosystem = () => {
  return (
    <div className="p-5">
      <h1 className="text-center mb-4">Ecosystem</h1>
      <Row lg={5} md={2} xs={1} className="eco-content">
        <Col className="mb-2">
          <EcosystemItem
            text="GreenDAOla"
            alink="/greenDAOla"
            image="/token.png"
          />
        </Col>
        <Col className="mb-2">
          <EcosystemItem
            text="Altlanteans Official Club"
            alink="http://altlanteansoc.com"
            image="/aoc.jpg"
          />
        </Col>
        <Col className="mb-2">
          <EcosystemItem text="Vpets" alink="/vpets" image="/vpets.png" />
        </Col>
        <Col className="mb-2">
          <EcosystemItem
            text="TheGreenerMarket"
            alink="/market"
            image="marketplace.png"
          />
        </Col>
        <Col className="mb-2">
          <EcosystemItem
            text="Coming soon"
            alink="/soon"
            image="/coming-soon.png"
          />
        </Col>
      </Row>
    </div>
  );
};

export default Ecosystem;
