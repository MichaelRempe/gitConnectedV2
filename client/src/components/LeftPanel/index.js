import React from "react";
import "./style.css";

const LeftPanel = props => {
  return (
    <div className="leftPanel">
      <div className="card">
        <div className="card-title">Welcome!</div>
        {props.children}
      </div>
    </div>
  );
};

export default LeftPanel;
