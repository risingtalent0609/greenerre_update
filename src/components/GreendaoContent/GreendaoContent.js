import React from "react";
import { Row, Col } from "react-bootstrap";

import "./GreendaoContent.scss";

const Greendao_content = () => {
  return (
    <div>
      <Row>
        <Col>
          <h2>What is GreenDAO(GD)</h2>
          <p>
            - GreenDAO is a platform that incentivises participation in ESG
            activities, bridging event organisers with participants and
            appropriate funding. <br />
            GreenDAO aims to make sustainability accessible to everyone within
            each of their various capacities. The platform will qualify and
            quantify carbon-related activities, as well as, non-carbon related
            activities such as social philanthropy, equality and conservation.
            The Decentralised Autonomous Organisation (DAO) serves to create a
            consensus network to determine the value of various non-carbon
            related activities, and to create a diverse and international
            network for like-minded individuals in the ustainability space to
            share information and collaborate.
            <br />
            Who does it serve
            <br />- GreenDAO serves both individuals and businesses. By breaking
            down any and all barriers for anyone who wants to engage in
            sustainability activities and get rewarded for their participation.
            Businesses can support local sustainability efforts at a grassroots
            level, rather than rely purely on carbon credits for offsets.
          </p>
        </Col>
        <Col>
          <h2>How the GreenDAO ecosystem works</h2>
        </Col>
      </Row>
    </div>
  );
};

export default Greendao_content;
