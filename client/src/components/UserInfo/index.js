import React from "react";

// style:
import "./style.css";

const UserInfo = props => {
  console.log(props.userId);
  return (
    <div className="card">
      {/* <h5 className="card-header">Welcome!</h5>
      <div className="card-title">{`${props.user.firstName} ${props.user.lastName}`}</div>
      <div className="card-body">{props.user.devType}</div> */}
    </div>
  );
};

export default UserInfo;
