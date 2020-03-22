import React from "react";
import "./style.css";

function Image(props) {
  return (
    <div className="Image text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
      {props.children}
    </div>
  );
}

export default Image;