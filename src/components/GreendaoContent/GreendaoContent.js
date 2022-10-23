import React from "react";
import { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";

import "./GreendaoContent.scss";

const Greendao_content = () => {
  const [summary, setSummary] = useState(false);
  console.log(summary);
  const clickSummary = () => {
    console.log("----------------------------");
    setSummary(!summary);
  };
  return (
    <Container>
      <Row>
        <Col>
          <h2>What is GreenDAO(GD)</h2>
          <button onClick={clickSummary()}>Summary</button>
          {summary ? (
            <p>
              GreenDAO is a platform that incentivises participation in ESG
              activities, bridging event organisers with participants and
              appropriate funding. <br />
              GreenDAO aims to make sustainability accessible to everyone within
              each of their various capacities. The platform will qualify and
              quantify carbon-related activities, as well as, non-carbon related
              activities such as social philanthropy, equality and conservation.
              The Decentralised Autonomous Organisation (DAO) serves to create a
              consensus network to determine the value of various non-carbon
              related activities, and to create a erse and international network
              for like-minded individuals in the ustainability space to share
              information and collaborate.
            </p>
          ) : (
            <></>
          )}

          {/* <div></div> */}
          <p>Who does it serve</p>
          <p>
            GreenDAO serves both individuals and businesses. By breaking down
            any and all barriers for anyone who wants to engage in
            sustainability activities and get rewarded for their participation.
            Businesses can support local sustainability efforts at a grassroots
            level, rather than rely purely on carbon credits for offsets.
          </p>
        </Col>
        <Col>
          <h2>How the GreenDAO ecosystem works</h2>
        </Col>
      </Row>
    </Container>
  );
};

export default Greendao_content;
