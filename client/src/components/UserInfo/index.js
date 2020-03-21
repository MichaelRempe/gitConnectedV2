import React from "react";

// style:
import "./style.css";

const UserInfo = props => {
  return (
    <div className="card">
        <div className="card-title">props.name!</div>
      <div className="card-body">props.Additional Info</div>
    </div>
  );
};

export default UserInfo;
