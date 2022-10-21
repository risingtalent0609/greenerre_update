import React from "react";
import { Link } from "react-router-dom";
//import CSS
import "./EcosystemItem.scss";
const EcosystemItem = (props) => {
  return (
    <div className="item-control">
      <Link to={props.alink}>
        <img src={props.image} alt="item" />
        <h4 className="text-center">{props.text}</h4>
      </Link>
    </div>
  );
};

export default EcosystemItem;
