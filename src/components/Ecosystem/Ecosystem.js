import React from "react";
import { Row, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";

import EcosystemItem from "../EcosystemItem/EcosystemItem";
const Ecosystem = () => {
  return (
    <>
      <div style={{ display: "flex", alignContent: "center" }}>
        <img src="greenDAO_invis_bg.png" style={{ width: "100" }} />
      </div>
      <div className="p-5">
        <h1 className="text-center mb-4">Ecosystem</h1>
        <Row lg={4} md={2} xs={1} className="eco-content">
          <Col className="mb-2">
            <EcosystemItem
              text="GreenDAOla"
              alink="/greenDAOla"
              image="/token.png"
              type="local"
            />
          </Col>
          <Col className="mb-2">
            <EcosystemItem
              text="Altlanteans Official Club"
              alink="https://altlanteansoc.com/"
              type="out"
              image="/aoc.jpg"
            />
          </Col>
          <Col className="mb-2">
            <EcosystemItem
              text="Vpets"
              alink="/vpets"
              image="/vpets.png"
              type="local"
            />
          </Col>
          <Col className="mb-2">
            <EcosystemItem
              text="TheGreenerMarket"
              alink="/market"
              image="marketplace.png"
              type="local"
            />
          </Col>
          {/* <Col className="mb-2">
          <EcosystemItem
            text="Coming soon"
            alink="/soon"
            image="/coming-soon.png"
          />
        </Col> */}
        </Row>
      </div>
    </>
  );
};

export default Ecosystem;
