import React from "react";
import "./style.css";

const LeftPanel = props => {
  return (
    <div className="leftPanel d-none d-lg-inline">
        {props.children}    
    </div>
  );
};

export default LeftPanel;
